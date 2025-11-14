import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaCoins, FaBuilding, FaBullhorn } from "react-icons/fa";

const services = [
  {
    icon: <FaChartLine />,
    title: "Wealth Management",
    description:
      "We provide personalized wealth management solutions, tailoring our services to the unique needs of each client. Our experts design strategies to grow, protect, and preserve your wealth while aligning with your long-term goals.",
  },
  {
    icon: <FaCoins />,
    title: "Asset Management",
    description:
      "Our seasoned professionals manage assets for individuals and corporations, focusing on maximizing returns while maintaining disciplined risk control and transparency.",
  },
  {
    icon: <FaBuilding />,
    title: "Real Estate",
    description:
      "We guide clients in premium property investments both locally and internationally. With deep market insight, we help you diversify your portfolio and unlock steady rental income opportunities.",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Services",
    description:
      "Our marketing division manages influencer portfolios, YouTubers, and elite motorsport personalities. With global media partnerships, we help you elevate visibility and engagement across Europe and the Middle East.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-invest-white via-gray-50 to-invest-white text-black py-20 px-6 md:px-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-invest-gray rounded-xl p-8 shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-invest-orange/90 to-invest-orange/70 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-xl z-0" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start justify-center">
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="text-invest-orange text-4xl mb-5 transition-transform duration-300"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-white font-semibold mb-3 transition-colors group-hover:text-invest-black">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-justify text-white transition-colors group-hover:text-invest-black">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
