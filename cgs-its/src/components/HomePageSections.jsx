export const AboutSection = () => (
  <section className="snap-start h-[60vh] mt-[10vh] bg-black text-white flex flex-col items-center justify-center px-6 text-center space-y-6">
    <h2 className="text-4xl font-bold">About CGS IT</h2>
    <p className="text-lg max-w-3xl text-gray-300">
      At CGS IT, we specialize in delivering world-class IT staffing and consulting services. 
      Our mission is to empower organizations with tailored technology solutions that drive innovation 
      and efficiency, ensuring they stay ahead in today's competitive landscape.
    </p>
    <a
      href="/AboutUs"
      className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
    >
      Learn More About Us
    </a>
  </section>
);
export const ServicesSection = () => (
  <section className="snap-start h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center space-y-6">
    <h2 className="text-4xl font-bold">Our Services</h2>
    <p className="text-lg max-w-3xl text-gray-300">
      From IT staffing and software development to project-based solutions, CGS IT provides 
      comprehensive services tailored to meet your business challenges and goals. Let’s empower 
      your organization with the right technology.
    </p>
    <a
      href="/Services"
      className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
    >
      Explore Our Services
    </a>
  </section>
);

export const IndustriesSection = () => (
  <section className="snap-start h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center space-y-6">
    <h2 className="text-4xl font-bold">Industries We Serve</h2>
    <p className="text-lg max-w-3xl text-gray-300">
      CGS IT proudly partners with leading organizations in healthcare, financial services, 
      technology, manufacturing, government, and beyond to provide tailored IT solutions that 
      address their unique industry challenges.
    </p>
    <a
      href="/Industries"
      className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
    >
      Discover Our Industries
    </a>
  </section>
);