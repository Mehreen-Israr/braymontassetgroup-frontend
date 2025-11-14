import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 "
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-invest-black/90 z-10" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full px-6 md:px-20 text-invest-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-invest-orange to-white bg-clip-text text-transparent"
          variants={fadeUp(0.2)}
        >
          Welcome To Braymont Asset Group
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-medium mb-6 text-gray-200"
          variants={fadeUp(0.4)}
        >
          Premier Investment Company Based In The United Kingdom
        </motion.h2>

        <motion.p
          className="max-w-2xl text-invest-silver text-base md:text-lg mb-10 leading-relaxed"
          variants={fadeUp(0.6)}
        >
          We are dedicated to delivering world-class services in wealth
          management, asset management, real estate, and marketing helping
          clients achieve sustainable growth and lasting success.
        </motion.p>
        
        <motion.a
          href="/about"
          className="group inline-flex items-center gap-2 font-bold uppercase text-invest-white relative"
          variants={fadeUp(0.8)}
      >
        <span className="relative">
         ABOUT US
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-invest-white transition-all duration-300 group-hover:bg-invest-orange group-hover:w-full" />
        </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
       →
      </span>
    </motion.a>
    
      </motion.div>

      {/* Floating scroll hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-invest-silver text-sm z-20"
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  );
};

export default Hero;
