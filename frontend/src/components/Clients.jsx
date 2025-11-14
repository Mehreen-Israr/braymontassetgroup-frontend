import React from "react";
import { motion } from "framer-motion";
import funderPro from "../assets/FunderPro.png";
import investorAB from "../assets/InvestorAB.png";
import b2bank from "../assets/b2bank.png";
import orion from "../assets/OWM.png";
import finnova from "../assets/Finnova.png";

const logos = [funderPro, investorAB, b2bank, finnova, orion];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Clients = () => {
  return (
    <section className="bg-invest-white text-black py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Our Clients
          </motion.h2>
        </motion.div>

        {/* Partner Logos Grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-y border-gray-200 divide-x divide-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={0.3 + index * 0.1}
              className="flex items-center justify-center py-8 px-6 bg-white transition-all duration-500 hover:bg-gray-50"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-16 md:max-h-20 object-contain grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
