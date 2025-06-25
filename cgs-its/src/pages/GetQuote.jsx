import React, { useState } from "react";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    projectDetails: "",
    budget: "",
    timeline: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement email or API submission logic here
    console.log("Form Submitted", formData);
    alert("Thank you for your request! We'll get back to you soon.");
  };

  return (
    <div
      className="min-h-screen bg-[#1e1e2f] text-white"
      style={{ paddingTop: "6rem" }} // Adjusted for the fixed navbar
    >
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Get a Quote</h1>
        <p className="text-center text-gray-400 mb-8">
          Please provide as much detail as possible so we can tailor our services to meet your needs.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-[#2a2a3b] p-6 rounded-lg shadow-lg space-y-6"
        >
          {/* Name and Email */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-[#2e2e3f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-[#2e2e3f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
                required
              />
            </div>
          </div>

          {/* Phone and Company */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-[#2e2e3f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-[#2e2e3f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
              />
            </div>
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Service Type</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-[#2e2e3f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="IT Consulting">IT Consulting</option>
              <option value="Recruiting">Recruiting</option>
              <option value="Software Development">Software Development</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-sm font-medium mb-2">Project Details</label>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-[#2e2e3f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Budget and Timeline */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Estimated Budget</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-[#2e2e3f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Timeline</label>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-[#2e2e3f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-[#2e2e3f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
              rows={4}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#1e90ff] to-[#0056b3] hover:from-[#0056b3] hover:to-[#1e90ff] text-white rounded shadow-lg transition"
            >
              Submit Quote Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetQuote;
