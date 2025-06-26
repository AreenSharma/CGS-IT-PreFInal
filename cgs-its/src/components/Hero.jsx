import React from "react";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';
import Threads from "../components/Threads";

// BlurText Component
const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);
  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <div ref={ref} className={className} style={{ 
      fontSize: "clamp(1rem, 3.5vw, 2rem)", 
      marginTop: "clamp(0.25rem, 1vw, 0.5rem)",
      lineHeight: "1.4",
      maxWidth: "90vw"
    }}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        };
        spanTransition.ease = easing;

        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
            style={{ display: 'inline-block' }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </div>
  );
};

// Hero Component
const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "#000",
        scrollSnapAlign: "start",
      }}
    >
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      <img
        src="/logo.svg"
        alt="CGS IT Logo"
        style={{
          position: "absolute",
          top: "-7.70rem",
          left: "2rem",
          height: "15rem",
          maxWidth: "12rem",
          filter: "brightness(0) invert(1)",
          zIndex: 1,
        }}
        className="hidden md:block"
      />
      <img
        src="/logo.svg"
        alt="CGS IT Logo"
        style={{
          position: "absolute",
          top: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          height: "clamp(6rem, 15vw, 8rem)",
          maxWidth: "clamp(4rem, 12vw, 6rem)",
          filter: "brightness(0) invert(1)",
          zIndex: 1,
        }}
        className="block md:hidden"
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 1,
          padding: "0 clamp(1rem, 5vw, 2rem)",
          width: "100%",
          maxWidth: "100vw",
        }}
      >
        <h1 style={{ 
          fontSize: "clamp(2.5rem, 7vw, 7rem)", 
          fontWeight: "bold",
          marginBottom: "clamp(0.5rem, 2vw, 1rem)"
        }}>
          CGS IT
        </h1>
        <BlurText
          text="Innovating the future of IT solutions"
          delay={400}
          animateBy="words"
          direction="top"
          stepDuration={0.8}
          onAnimationComplete={handleAnimationComplete}
        />
      </div>
    </section>
  );
};

export default Hero;