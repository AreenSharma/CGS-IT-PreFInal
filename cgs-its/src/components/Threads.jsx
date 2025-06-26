import { useEffect, useRef, useState } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    fragColor = vec4(uColor * colorVal, colorVal);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const Threads = ({
  color = [.5, 1.5, 1], //Color change yahan se karna
  amplitude = 1,
  distance = -1,
  enableMouseInteraction = false,
  ...rest
}) => {
  const containerRef = useRef(null);
  const animationFrameId = useRef();
  const [webglSupported, setWebglSupported] = useState(true);
  const [error, setError] = useState(null);

  // Function to check WebGL support
  const checkWebGLSupport = () => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      return !!gl;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Check WebGL support before initializing
    if (!checkWebGLSupport()) {
      setWebglSupported(false);
      setError('WebGL is not supported in this browser.');
      return;
    }

    const container = containerRef.current;
    let renderer = null;
    let gl = null;

    try {
      renderer = new Renderer({ alpha: true });
      gl = renderer.gl;
      
      // Check if renderer was created successfully
      if (!renderer || !gl) {
        throw new Error('Failed to create WebGL renderer');
      }

      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      container.appendChild(gl.canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          iTime: { value: 0 },
          iResolution: {
            value: new Color(
              gl.canvas.width,
              gl.canvas.height,
              gl.canvas.width / gl.canvas.height
            ),
          },
          uColor: { value: new Color(...color) },
          uAmplitude: { value: amplitude },
          uDistance: { value: distance },
          uMouse: { value: new Float32Array([0.5, 0.5]) },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });

      function resize() {
        try {
          const { clientWidth, clientHeight } = container;
          renderer.setSize(clientWidth, clientHeight);
          program.uniforms.iResolution.value.r = clientWidth;
          program.uniforms.iResolution.value.g = clientHeight;
          program.uniforms.iResolution.value.b = clientWidth / clientHeight;
        } catch (err) {
          console.error('Resize error:', err);
        }
      }
      
      window.addEventListener("resize", resize);
      resize();

      let currentMouse = [0.5, 0.5];
      let targetMouse = [0.5, 0.5];

      function handleMouseMove(e) {
        try {
          const rect = container.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = 1.0 - (e.clientY - rect.top) / rect.height;
          targetMouse = [x, y];
        } catch (err) {
          console.error('Mouse move error:', err);
        }
      }
      
      function handleMouseLeave() {
        targetMouse = [0.5, 0.5];
      }
      
      if (enableMouseInteraction) {
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
      }

      function update(t) {
        try {
          if (enableMouseInteraction) {
            const smoothing = 0.05;
            currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
            currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
            program.uniforms.uMouse.value[0] = currentMouse[0];
            program.uniforms.uMouse.value[1] = currentMouse[1];
          } else {
            program.uniforms.uMouse.value[0] = 0.5;
            program.uniforms.uMouse.value[1] = 0.5;
          }
          program.uniforms.iTime.value = t * 0.001;

          renderer.render({ scene: mesh });
          animationFrameId.current = requestAnimationFrame(update);
        } catch (err) {
          console.error('Animation update error:', err);
          // Stop animation loop if there's an error
          cancelAnimationFrame(animationFrameId.current);
        }
      }
      
      animationFrameId.current = requestAnimationFrame(update);

      return () => {
        try {
          cancelAnimationFrame(animationFrameId.current);
          window.removeEventListener("resize", resize);

          if (enableMouseInteraction) {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
          }
          
          if (gl && gl.canvas && container.contains(gl.canvas)) {
            container.removeChild(gl.canvas);
          }
          
          // Properly dispose of WebGL context
          const loseContext = gl?.getExtension("WEBGL_lose_context");
          if (loseContext) {
            loseContext.loseContext();
          }
        } catch (cleanupErr) {
          console.error('Cleanup error:', cleanupErr);
        }
      };

    } catch (err) {
      console.error('WebGL initialization failed:', err);
      setError(`Failed to initialize WebGL: ${err.message}`);
      setWebglSupported(false);
      
      // Clean up if initialization failed
      if (gl && gl.canvas && container.contains(gl.canvas)) {
        try {
          container.removeChild(gl.canvas);
        } catch (cleanupErr) {
          console.error('Failed to cleanup canvas:', cleanupErr);
        }
      }
    }
  }, [color, amplitude, distance, enableMouseInteraction]);

  // Fallback component when WebGL is not supported
  if (!webglSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent" {...rest}>
        <div className="text-center p-8 max-w-md">
          <div className="text-4xl mb-4 opacity-50">🌐</div>
          <h3 className="text-lg font-semibold mb-2 text-gray-600 dark:text-gray-400">
            3D Graphics Unavailable
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
            {error || 'WebGL is not supported or disabled in your browser.'}
          </p>
          <div className="text-xs text-gray-400 dark:text-gray-600">
            <p>To enable:</p>
            <ul className="mt-1 space-y-1">
              <li>• Update your browser</li>
              <li>• Enable hardware acceleration</li>
              <li>• Update graphics drivers</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-full relative" {...rest} />;
};

export default Threads;