import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Building2, MapPin } from "lucide-react";
import bgImage from "../assets/real.png"; // Replace with your actual image
import researchImg from "../assets/research.jpg";
import socialImg from "../assets/social.jpg";
import officeImg from "../assets/office.jpg";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};


const RealPage = () => {
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
            Real Estate
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

{/* Intro & Services Section */}
<section className="max-w-7xl mx-auto px-6 md:px-20 py-16">
  {/* Intro Paragraph */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="mb-12 max-w-4xl mx-auto"
  >
    <h3 className="text-3xl font-bold text-invest-black mb-4 text-center">
      Transforming Real Estate Into Opportunity
    </h3>
    <p className="text-lg text-gray-800 leading-relaxed text-justify">
      At Braymont Asset Group, we are dedicated to transforming real estate opportunities into thriving investments.
      With years of experience in the property market, we specialize in buying and selling residential and commercial properties,
      as well as managing lucrative rental projects. Our mission is to connect buyers and sellers with the right properties
      while maximizing investment potential.
    </p>
  </motion.div>

  {/* Services Section */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="max-w-4xl mx-auto"
  >
    <h3 className="text-2xl font-bold text-invest-black mb-6">Our Services</h3>
    <ul className="space-y-8 text-gray-800 text-md leading-relaxed text-justify list-disc pl-6">
      <li>
        <span className="font-semibold text-invest-black">Property Acquisition and Sales:</span><br />
        Whether you are looking to buy your dream home or sell a valuable asset, Braymont Asset Group is here to guide you through every step.
        We leverage our extensive market knowledge and industry connections to ensure smooth transactions and optimal outcomes.
      </li>
      <li>
        <span className="font-semibold text-invest-black">Project Sales:</span><br />
        We specialize in the sale of development projects, whether they are residential, commercial, or mixed-use.
        Our team assists developers in bringing their projects to market, offering strategic marketing and sales solutions
        to attract potential investors and buyers.
      </li>
    </ul>
  </motion.div>
</section>

{/* Project Cards Section */}
<section className="max-w-6xl mx-auto px-6 md:px-20 py-16 space-y-12">
  {/* Research Center */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="relative rounded-xl overflow-hidden shadow-md"
  >
    <img
      src={researchImg}
      alt="Research Center"
      className="w-full h-[300px] object-cover"
    />
    <div className="absolute bottom-0 left-0 w-full bg-invest-black/60 text-white px-6 py-4">
      <h3 className="text-xl font-semibold">Research Center</h3>
    </div>
  </motion.div>

  {/* Social Housing */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="relative rounded-xl overflow-hidden shadow-md"
  >
    <img
      src={socialImg}
      alt="Social Housing, Commercial Architecture"
      className="w-full h-[300px] object-cover"
    />
    <div className="absolute bottom-0 left-0 w-full bg-invest-black/60 text-white px-6 py-4">
      <h3 className="text-xl font-semibold">Social Housing, Commercial Architecture</h3>
    </div>
  </motion.div>

  {/* Administrative Offices */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="relative rounded-xl overflow-hidden shadow-md"
  >
    <img
      src={officeImg}
      alt="Administrative Offices"
      className="w-full h-[300px] object-cover"
    />
    <div className="absolute bottom-0 left-0 w-full bg-invest-black/60 text-white px-6 py-4">
      <h3 className="text-xl font-semibold">Administrative Offices</h3>
    </div>
  </motion.div>
</section>

{/* Investment Focus Section */}
<section className="max-w-6xl mx-auto px-6 md:px-20 py-16">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="grid md:grid-cols-2 gap-12 items-center"
  >
    {/* Quote Section */}
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-invest-black">
        Guiding Your Investments With Precision
      </h3>
      <p className="text-lg text-gray-800 leading-relaxed text-justify">
        Protecting Your Capital, And Creating Lasting Value. Our strategic approach spans across capital restructuring, real estate, and infrastructure each backed by proven success metrics.
      </p>
    </div>

    {/* Bar Graph Section */}
    <div className="space-y-6">
      {/* Capital Restructuring */}
      <div>
        <p className="text-md font-semibold text-invest-black mb-1">Capital Restructuring – 98%</p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-invest-black h-4 rounded-full" style={{ width: "98%" }} />
        </div>
      </div>

      {/* Real Estate */}
      <div>
        <p className="text-md font-semibold text-invest-black mb-1">Real Estate – 72%</p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-invest-black h-4 rounded-full" style={{ width: "72%" }} />
        </div>
      </div>

      {/* Infrastructure */}
      <div>
        <p className="text-md font-semibold text-invest-black mb-1">Infrastructure – 94%</p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-invest-black h-4 rounded-full" style={{ width: "94%" }} />
        </div>
      </div>
    </div>
  </motion.div>
</section>

{/* Wealth Preservation Section */}
<section className="bg-invest-gray text-white py-16 px-6 md:px-20">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
  >
    {/* Text Content */}
    <div className="space-y-6">
      <h3 className="text-2xl font-bold uppercase tracking-wide">
        Wealth Preservation
      </h3>
      <p className="text-lg leading-relaxed">
        Protecting Your Hard Earned Money From Unnecessary Risk
      </p>
      <div className="space-y-2">
        <p className="text-md font-semibold">CONNECT WITH US</p>
        <p className="text-sm text-white/80">
          Transparency & Trust — Clear communication and reliable reporting
        </p>
      </div>
    </div>

    {/* CTA Button */}

    <div className="flex justify-center md:justify-end">
    <Link to="/contact">
      <button className="bg-invest-orange text-invest-black font-semibold px-6 py-3 rounded-full hover:bg-white transition">
        Contact Us
      </button>
    </Link>
    </div>
  </motion.div>
</section>

    </section>
  );
};

export default RealPage;