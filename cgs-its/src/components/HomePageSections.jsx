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
      CGS IT provides a range of IT solutions to help your organization achieve its goals. Whether you need expert staffing, bespoke software solutions, or complete project management, we are here to empower your business.
    </p>
    <ul className="text-gray-300 space-y-3 max-w-3xl">
      <li>• Tailored IT staffing solutions to match your business requirements</li>
      <li>• Custom software development for web and mobile platforms</li>
      <li>• Comprehensive cloud migration and infrastructure optimization</li>
      <li>• Cybersecurity solutions to protect your digital assets</li>
      <li>• End-to-end project management and business transformation support</li>
    </ul>
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
      With years of experience across multiple industries, CGS IT offers specialized solutions tailored to meet the unique challenges of each sector. We work closely with our partners to deliver meaningful results.
    </p>
    <ul className="text-gray-300 space-y-3 max-w-3xl">
      <li>• Healthcare: Optimizing patient care with robust IT solutions</li>
      <li>• Financial Services: Ensuring security and efficiency in operations</li>
      <li>• Technology: Delivering innovation for growth and scalability</li>
      <li>• Manufacturing: Enhancing processes through automation and insights</li>
      <li>• Government: Providing reliable and secure IT infrastructure</li>
      <li>• Retail & E-Commerce: Boosting customer experience with smart solutions</li>
    </ul>
    <a
      href="/Industries"
      className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
    >
      Discover Our Industries
    </a>
  </section>
);
