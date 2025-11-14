import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import bgImage from "../assets/Contact.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/send/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Check your connection or backend.");
    }
  };

  return (
    <section
      className="relative bg-fixed bg-center bg-cover text-black"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Info Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-8"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent">
            Office Hours
          </h2>
          <ul className="text-lg text-gray-800 space-y-1">
            <li>Monday – Friday: 9 AM – 5 PM</li>
            <li>Saturday: 10 AM – 2 PM</li>
            <li>Sunday: Closed</li>
          </ul>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-invest-orange w-6 h-6" />
              <div>
                <h3 className="font-semibold text-invest-black">Email</h3>
                <p className="text-gray-700">info@BraymontAssetGroup.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-invest-orange w-6 h-6" />
              <div>
                <h3 className="font-semibold text-invest-black">Address</h3>
                <p className="text-gray-700">Bundespl. 17, 6300 Zug, Switzerland</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent">
            Send Us Email
          </h2>
          <p className="text-gray-800 mb-6">
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-invest-orange"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-invest-orange"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-invest-orange"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-invest-orange"
            />
            <button
              type="submit"
              className="bg-invest-black text-white px-6 py-2 rounded-md hover:bg-invest-orange transition"
            >
              SEND
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
