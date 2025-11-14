import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/values-bg.png";

const values = [
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty in all our dealings.",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do.",
  },
  {
    title: "Client-Centric",
    description: "We put our clients at the heart of everything we do.",
  },
  {
    title: "Innovation",
    description:
      "We’re constantly looking for new ways to improve our services and stay ahead of the curve.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Value = () => {
  return (
    <section className="relative w-full text-invest-white overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-invest-black/90 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6 md:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-invest-orange to-white bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Our Core Values
          </motion.h2>

          <motion.p
            className="text-center max-w-3xl mx-auto text-invest-silver mb-16 text-lg leading-relaxed"
            variants={fadeInUp}
            custom={0.2}
          >
            At <span className="font-semibold text-white">Braymont Asset Group</span>, 
            we’re committed to excellence and integrity in everything we do. 
            Our principles shape every decision, partnership, and solution 
            ensuring lasting trust and success.
          </motion.p>
        </motion.div>

        {/* Animated Grid of Values */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={0.3 + index * 0.2}
              className="group bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg 
                         transition-all duration-500 hover:bg-invest-orange/90 
                         hover:text-black hover:scale-[1.03]"
            >
              <h3 className="text-2xl font-semibold mb-3 text-invest-orange group-hover:text-black transition-colors">
                {value.title}
              </h3>
              <p className="text-invest-silver text-base leading-relaxed text-justify group-hover:text-black/80">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Value;
