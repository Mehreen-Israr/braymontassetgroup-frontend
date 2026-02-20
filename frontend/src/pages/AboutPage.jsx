import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Building2, ClipboardList, Lightbulb, Users, FileText, Coffee, PieChart, Gavel } from "lucide-react";
import bgImage from "../assets/About.png";
import ceoImage from "../assets/ceo.jpeg";
import investmentImage from "../assets/investment.jpeg";
import researchImage from "../assets/research.jpeg";
import portfolioImage from "../assets/portfolio.jpeg";
import operationsImage from "../assets/operations.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const values = [
  {
    title: "Company Values",
    text: "At Braymont Asset Group, we believe in a set of core values that guide our actions and decisions. We are committed to:",
    icon: null,
    bg: "bg-invest-silver",
    textColor: "text-black",
  },
  {
    title: "Mission",
    text: "Our mission is to provide tailored investment solutions that deliver strong returns while minimizing risk. We achieve this by combining our expertise in financial markets, economic trends, and investment strategies. Our goal is to build long-term relationships with our clients, based on trust, respect, and open communication.",
    icon: <Lightbulb className="w-8 h-8 text-white mb-2" />,
    bg: "bg-invest-gray",
    textColor: "text-white",
  },
  {
    title: "Integrity",
    text: "We take pride in our integrity and commitment to doing business ethically. We adhere to the highest standards of conduct and comply with all relevant laws and regulations. We believe that integrity is essential to building trust with our clients, partners, and stakeholders.",
    icon: <ClipboardList className="w-8 h-8 text-black mb-2" />,
    bg: "bg-invest-white",
    textColor: "text-black",
  },
];

const teamRoles = [
  {
    name: "Irfan",
    title: "Chief Executive Officer",
    description:
      "Leading Braymont Asset Group with strategic vision and extensive expertise in financial markets, driving innovation and excellence across all our service offerings.",
    image: ceoImage,
  },
  {
    name: "Martin Frandsen",
    title: "Investment Manager",
    description:
      "Specializes in diverse asset classes including equities, fixed income, commodities, and currencies, delivering strategic investment solutions.",
    image: investmentImage,
  },
  {
    name: "Nils Gustafsson",
    title: "Research Analyst",
    description:
      "Conducts comprehensive analysis of market trends, economic indicators, and company performance to provide actionable insights.",
    image: researchImage,
  },
  {
    name: "Levi Ackermann",
    title: "Portfolio Manager",
    description:
      "Oversees the implementation of investment strategies and monitors portfolio performance, ensuring optimal risk-adjusted returns for our clients.",
    image: portfolioImage,
  },
  {
    name: "Ruben Vardanyan",
    title: "Operations Manager",
    description:
      "Ensures seamless execution of trades and provides comprehensive administrative support, maintaining operational excellence across all processes.",
    image: operationsImage,
  },
];

const processSteps = [
  { title: "Contact Us", icon: <FileText className="w-6 h-6 text-invest-black" /> },
  { title: "Meet With Us", icon: <Coffee className="w-6 h-6 text-invest-black" /> },
  { title: "Talk About Your Project", icon: <PieChart className="w-6 h-6 text-invest-black" /> },
  { title: "Implement The Project", icon: <Gavel className="w-6 h-6 text-invest-black" /> },
];


const AboutPage = () => {
  return (
    <section className="bg-gradient-to-b from-invest-white via-gray-50 to-invest-white text-black overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative h-[400px] flex items-center justify-center text-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        <div className="relative z-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="text-xl font-semibold text-invest-black/80"
          >
            Braymont Asset Group
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="max-w-7xl mx-auto py-16 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { end: 13, label: "Years Experience" },
          { end: 230, label: "Investments Made" },
          { end: 1000, label: "Customers" },
          { end: 988, label: "Happy Customers" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            custom={index * 0.2}
            className="bg-invest-black text-invest-white rounded-xl py-8 shadow-lg hover:shadow-xl transition-all hover:scale-[1.03]"
          >
            <h3 className="text-4xl font-bold text-invest-orange mb-2">
              <CountUp start={1} end={stat.end} duration={3} />+
            </h3>
            <p className="text-sm uppercase tracking-wide text-invest-silver">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Company Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-16">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-5xl text-center font-extrabold mb-12 bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent"
        >
          Braymont Asset Group
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col items-center md:items-start">
            <Building2 className="text-[#4A6C8D] w-12 h-12 mb-2" />
            <div className="w-12 h-[2px] bg-[#4A6C8D] mt-1"></div>
          </div>

          <div className="max-w-3xl text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Establishment
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              Braymont Asset Group was founded in November 2025 with the mission to provide
              innovative investment solutions to individuals and institutions.
              Our journey began with a clear vision to create a company that
              would combine expert knowledge, strategic thinking, and a
              commitment to excellence. Over the years, we have grown and
              evolved, but our core values and mission have remained unchanged.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Values Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              custom={index * 0.2}
              className={`group relative ${item.bg} h-[350px] p-6 shadow-md overflow-hidden transition-all duration-300 hover:bg-invest-orange flex flex-col justify-center`}
            >
              <div className="relative z-10">
                {item.icon && (
                  <div className="flex justify-center mb-2">{item.icon}</div>
                )}
                <h3
                  className={`${item.textColor} text-2xl font-bold mb-4 text-center transition-colors group-hover:text-black`}
                >
                  {item.title}
                </h3>
                <p
                  className={`${item.textColor} text-md leading-relaxed text-justify transition-colors group-hover:text-black`}
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Team Section */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-5xl text-center font-extrabold mb-6 bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent"
      >
        Our Team
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        custom={0.2}
        className="text-lg text-gray-800 leading-relaxed text-center max-w-4xl mx-auto mb-16"
      >
        At Braymont Asset Group, we believe that teamwork is essential to achieving our goals.
        Our professionals work seamlessly together, sharing knowledge and encouraging
        open communication, collaboration, and continuous learning. Our team consists 
        of experienced professionals passionate about investing and committed to excellence. 
        Each member brings unique skills and expertise to deliver comprehensive investment services.
      </motion.p>

{/* Roles Grid */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 justify-items-center"
>
  {teamRoles.map((role, index) => (
    <motion.div
      key={role.title}
      variants={fadeInUp}
      custom={index * 0.2}
      whileHover={{ scale: 1.06 }}
      className="group relative w-[260px] h-[380px] bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-start overflow-hidden"
    >
      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-invest-orange scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Image - Fixed height for horizontal alignment */}
        <div className="w-full h-36 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-start justify-center flex-shrink-0">
          <img
            src={role.image}
            alt={role.name}
            className="w-full h-full object-contain object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Name and Title - Fixed height for horizontal alignment */}
        <div className="mb-3 h-16 flex-shrink-0">
          <h3 className="text-lg font-bold text-invest-black transition-colors group-hover:text-black mb-1">
            {role.name}
          </h3>
          <p className="text-sm font-semibold text-invest-orange transition-colors group-hover:text-black">
            {role.title}
          </p>
        </div>
        
        {/* Description - Flexible height */}
        <p className="text-gray-700 text-sm leading-relaxed transition-colors group-hover:text-black flex-grow">
          {role.description}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>

<motion.h2
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
  className="text-5xl text-center font-extrabold mb-12 mt-16 bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent"
>
  The General Process
</motion.h2>

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
>
  {processSteps.map((step, index) => (
    <React.Fragment key={step.title}>
      <motion.div
        variants={fadeInUp}
        custom={index * 0.2}
        className="group relative w-[220px] h-[180px] bg-invest-silver rounded-xl shadow-md flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-invest-orange cursor-pointer"
      >
        <div className="absolute inset-0 bg-invest-orange scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 z-0 rounded-xl" />
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <div className="mb-3">{step.icon}</div>
          <h3 className="text-lg font-semibold text-invest-black transition-colors group-hover:text-black">
            {step.title}
          </h3>
        </div>
      </motion.div>

      {/* Arrow between steps (skip after last step) */}
      {index < processSteps.length - 1 && (
        <div className="hidden md:flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-invest-black mx-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </React.Fragment>
  ))}
</motion.div>


    </section>
  );
};

export default AboutPage;
