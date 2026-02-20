import React from "react";
import { motion } from "framer-motion";
import cityscape from "../assets/city.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Ideas = () => {
  return (
    <section className="bg-gradient-to-b from-invest-white via-gray-50 to-invest-white text-black py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-center h-full space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            We Bring Ideas Home.
          </motion.h1>

          <motion.p
            className="text-base text-justify leading-relaxed text-gray-700"
            variants={fadeInUp}
            custom={0.2}
          >
            Established in November 2025, <span className="font-semibold text-invest-black">Braymont Asset Group</span> is a United Kingdom-based financial services company that provides comprehensive solutions for individuals and corporations. Our mission is to empower clients to achieve their financial aspirations through personalized wealth management, asset management, real estate, and marketing solutions.
          </motion.p>

          <motion.p
            className="text-base text-justify leading-relaxed text-gray-700"
            variants={fadeInUp}
            custom={0.4}
          >
            In wealth and asset management, we focus on sustainable growth and protection of wealth. Our experienced professionals design customized strategies aligned with each client’s goals and risk appetite ensuring financial stability and long-term success.
          </motion.p>

          <motion.p
            className="text-base text-justify leading-relaxed text-gray-700"
            variants={fadeInUp}
            custom={0.6}
          >
            Our real estate services offer premium investment opportunities in distinguished properties globally. Whether you seek diversification or consistent rental income, our expert advisors ensure a seamless investment experience.
          </motion.p>

          {/* Contact Button */}
          <motion.div variants={fadeInUp} custom={0.8}>
            <a
              href="/contact"
              className="inline-block bg-invest-orange text-invest-black px-8 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase shadow-md hover:shadow-lg transition-all hover:bg-invest-black hover:text-invest-orange"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with Overlay & Animation */}
        <motion.div
          className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={cityscape}
            alt="Cityscape"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent rounded-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Ideas;
