import React, { useState } from "react";
import { motion } from "framer-motion";

const Touch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    areaSize: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // for success/error messages

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/request/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          area_size: formData.areaSize,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Quote request sent successfully!");
        setFormData({
          name: "",
          email: "",
          areaSize: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus(`❌ Failed: ${data.error || "Please try again."}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send request. Check your connection or backend.");
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <section className="bg-gradient-to-b from-invest-white via-gray-50 to-invest-white text-black py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Text */}
        <motion.div
          className="flex flex-col justify-center h-full space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-base text-invest-black"
            variants={fadeInUp}
            custom={0.2}
          >
            Want to learn more about how{" "}
            <span className="font-semibold">Braymont Asset Group</span> can help
            you achieve your financial goals? Reach out via our website or call
            us directly. We look forward to working with you!
          </motion.p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-xl space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-invest-orange focus:border-transparent transition"
              required
              variants={fadeInUp}
              custom={0.1}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-invest-orange focus:border-transparent transition"
              required
              variants={fadeInUp}
              custom={0.2}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.input
              type="text"
              name="areaSize"
              placeholder="Area Size"
              value={formData.areaSize}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-invest-orange focus:border-transparent transition"
              variants={fadeInUp}
              custom={0.3}
            />
            <motion.input
              type="text"
              name="budget"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleChange}
              className="p-3 rounded-md border border-gray-300 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-invest-orange focus:border-transparent transition"
              variants={fadeInUp}
              custom={0.4}
            />
          </div>

          <motion.textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-invest-orange focus:border-transparent transition"
            variants={fadeInUp}
            custom={0.5}
          />

          <motion.button
            type="submit"
            className="bg-invest-orange text-invest-black px-8 py-3 rounded-lg font-semibold uppercase shadow-md hover:shadow-lg transition-all hover:bg-invest-black hover:text-invest-orange"
            variants={fadeInUp}
            custom={0.6}
          >
            Request Quote
          </motion.button>

          {/* Status message */}
          {status && (
            <motion.p
              className={`text-sm mt-2 ${
                status.startsWith("✅")
                  ? "text-green-600"
                  : status.startsWith("❌")
                  ? "text-red-600"
                  : "text-gray-500"
              }`}
              variants={fadeInUp}
              custom={0.7}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Touch;
