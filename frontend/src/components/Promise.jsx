import React from "react";
import { motion } from "framer-motion";
import building from "../assets/building.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Promise = () => {
  return (
    <section className="bg-gradient-to-b from-invest-white via-gray-50 to-invest-white text-black py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image with overlay and animation */}
        <motion.div
          className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={building}
            alt="Skyscraper"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent rounded-xl" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex flex-col justify-center h-full space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            High Quality Promise
          </motion.h2>

          {/* Feature 1 */}
          <motion.div variants={fadeInUp} custom={0.2}>
            <h3 className="text-xl font-semibold text-invest-orange mb-2">
              Personalized Approach
            </h3>
            <p className="text-base text-justify leading-relaxed text-gray-700">
              We take the time to understand your unique financial goals and
              develop customized solutions to achieve them. We don’t believe in
              a one-size-fits-all approach; instead, we collaborate closely with
              each client to build a tailored strategy that drives measurable
              success.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={fadeInUp} custom={0.4}>
            <h3 className="text-xl font-semibold text-invest-orange mb-2">
              Global Reach
            </h3>
            <p className="text-base text-justify leading-relaxed text-gray-700">
              With partnerships in United Kingdom, France, Dubai, the UK, Spain,
              and Italy, we provide access to premium global investment
              opportunities. Whether you're expanding your portfolio or your
              business, our network ensures seamless cross-border growth and
              security.
            </p>
          </motion.div>

          {/* Learn More Button */}
          <motion.div variants={fadeInUp} custom={0.6}>
            <a
              href="#services"
              className="inline-block bg-invest-orange text-invest-black px-8 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase shadow-md hover:shadow-lg transition-all hover:bg-invest-black hover:text-invest-orange"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Promise;
