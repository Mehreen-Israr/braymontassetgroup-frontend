import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Building2,
  FlaskConical,
  CircleArrowRight,
  PlusSquare,
  MinusSquare,
} from "lucide-react";
import servicesBg from "../assets/services.png";
import fountainImg from "../assets/fountain.png";
import assetImage from "../assets/asset.png";
import marketing from "../assets/marketing.png";
import quote from "../assets/quoteBg.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: custom, ease: "easeOut" },
  }),
};

const ServicesPage = () => {
  const [openItem, setOpenItem] = useState("investment");

  const toggleItem = (key) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <section className="bg-gradient-to-b from-invest-white via-gray-50 to-invest-white text-black overflow-hidden">
      {/* HERO SECTION */}
      <div
        className="relative h-[320px] flex items-center justify-center text-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 px-6"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent tracking-wide">
            Our Services
          </h2>
          <p className="text-lg md:text-xl font-medium text-invest-black/80">
            Braymont Asset Group
          </p>
        </motion.div>
      </div>

      {/* WEALTH MANAGEMENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          {/* LEFT IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-lg shadow-gray-300/30"
          >
            <img
              src={fountainImg}
              alt="Decorative fountain sculpture"
              className="w-full h-[360px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* RIGHT TEXT CONTENT */}
          <div className="space-y-6">
            <motion.h3
              variants={fadeInUp}
              custom={0.2}
              className="text-3xl md:text-4xl font-bold text-invest-black"
            >
              Wealth Management
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              custom={0.3}
              className="text-lg text-gray-800 leading-relaxed text-justify"
            >
              At Braymont Asset Group, we understand that effective wealth
              management is more than just numbers. It’s about your
              aspirations, your values, and your future. With over a decade of
              experience in the financial industry, we’re committed to guiding
              you through the complexities of wealth to help you achieve your
              goals with confidence.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              custom={0.4}
              className="text-lg text-gray-800 leading-relaxed text-justify"
            >
              Our team of seasoned financial advisors combines deep market
              insight with a personalized approach to craft tailored investment
              strategies. Whether you’re an individual seeking to grow your
              personal wealth, a family preserving your legacy, or a business
              optimizing resources. Braymont provides the expertise and vision
              you can trust.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW SECTION (New) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-[#1E2E3E] text-white py-16 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - TITLE */}
          <div className="flex flex-col items-start justify-center space-y-4 border-b-2 md:border-b-0 md:border-r border-white/30 pb-8 md:pb-0 md:pr-8">
            <CircleArrowRight className="text-yellow-300 w-12 h-12" />
            <h3 className="text-3xl font-semibold">Overview</h3>
            <div className="w-12 h-[2px] bg-yellow-300 mt-1" />
          </div>

          {/* RIGHT SIDE - COLLAPSIBLE CONTENT */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div>
              <button
                onClick={() => toggleItem("investment")}
                className="flex items-center gap-3 text-lg font-medium hover:text-yellow-300 transition"
              >
                {openItem === "investment" ? (
                  <MinusSquare className="w-5 h-5" />
                ) : (
                  <PlusSquare className="w-5 h-5" />
                )}
                Investment Management
              </button>
              {openItem === "investment" && (
                <p className="mt-2 text-gray-300 leading-relaxed">
                  We provide proactive investment strategies designed to
                  maximize returns while managing risks, tailored to your unique
                  financial situation and objectives.
                </p>
              )}
            </div>

            {/* Item 2 */}
            <div>
              <button
                onClick={() => toggleItem("planning")}
                className="flex items-center gap-3 text-lg font-medium hover:text-yellow-300 transition"
              >
                {openItem === "planning" ? (
                  <MinusSquare className="w-5 h-5" />
                ) : (
                  <PlusSquare className="w-5 h-5" />
                )}
                Financial Planning
              </button>
              {openItem === "planning" && (
                <p className="mt-2 text-gray-300 leading-relaxed">
                  Our customized financial plans help you meet your short- and
                  long-term objectives with confidence and structure.
                </p>
              )}
            </div>

            {/* Item 3 */}
            <div>
              <button
                onClick={() => toggleItem("risk")}
                className="flex items-center gap-3 text-lg font-medium hover:text-yellow-300 transition"
              >
                {openItem === "risk" ? (
                  <MinusSquare className="w-5 h-5" />
                ) : (
                  <PlusSquare className="w-5 h-5" />
                )}
                Risk Management
              </button>
              {openItem === "risk" && (
                <p className="mt-2 text-gray-300 leading-relaxed">
                  We identify, assess, and manage risks to ensure your portfolio
                  remains resilient under all market conditions.
                </p>
              )}
            </div>

            {/* Item 4 */}
            <div>
              <button
                onClick={() => toggleItem("philanthropy")}
                className="flex items-center gap-3 text-lg font-medium hover:text-yellow-300 transition"
              >
                {openItem === "philanthropy" ? (
                  <MinusSquare className="w-5 h-5" />
                ) : (
                  <PlusSquare className="w-5 h-5" />
                )}
                Philanthropic Advisory
              </button>
              {openItem === "philanthropy" && (
                <p className="mt-2 text-gray-300 leading-relaxed">
                  We assist clients in aligning their wealth with meaningful
                  philanthropic goals that create lasting impact.
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.section>

{/* ASSET MANAGEMENT SECTION */}
<section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="grid md:grid-cols-2 gap-14 items-center"
  >
    {/* LEFT TEXT CONTENT */}
    <div className="space-y-6">
      <motion.h3
        variants={fadeInUp}
        custom={0.2}
        className="text-3xl md:text-4xl font-bold text-invest-black"
      >
        Asset Management
      </motion.h3>

      <motion.p
        variants={fadeInUp}
        custom={0.3}
        className="text-lg text-gray-800 leading-relaxed text-justify"
      >
        At <span className="font-semibold">Braymont Asset Group</span>, we specialize
        in comprehensive asset management solutions designed to meet the unique
        needs of our clients. With a commitment to excellence, a deep
        understanding of the financial landscape, and a proactive approach to
        investing, we strive to enhance the long-term value of your investments
        while managing risks effectively.
      </motion.p>

      <motion.p
        variants={fadeInUp}
        custom={0.4}
        className="text-lg text-gray-800 leading-relaxed text-justify"
      >
        We believe that successful asset management is built on a foundation of
        trust, transparency, and tailored strategies. Our client-centric
        philosophy ensures that your financial goals are at the forefront of our
        decision-making process. By understanding your aspirations, risk
        tolerance, and investment horizon, we curate personalized strategies
        that align with your objectives.
      </motion.p>
    </div>

    {/* RIGHT IMAGE */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden shadow-lg shadow-gray-300/30"
    >
      <img
        src={assetImage}
        alt="Asset Management"
        className="w-full h-[380px] object-cover transform hover:scale-105 transition-transform duration-700"
      />
    </motion.div>
  </motion.div>
</section>

{/* ASSET MANAGEMENT OVERVIEW (Dark Section) */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
  className="bg-[#1E2E3E] text-white py-16 px-6 md:px-20"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    {/* LEFT SIDE - TITLE */}
    <div className="flex flex-col items-start justify-center space-y-4 border-b-2 md:border-b-0 md:border-r border-white/30 pb-8 md:pb-0 md:pr-8">
      <CircleArrowRight className="text-yellow-300 w-12 h-12" />
      <h3 className="text-3xl font-semibold">Overview</h3>
      <div className="w-12 h-[2px] bg-yellow-300 mt-1" />
    </div>

    {/* RIGHT SIDE - COLLAPSIBLE CONTENT */}
    <div className="space-y-6">
      {/* Item 1 */}
      <div>
        <button
          onClick={() => toggleItem("investmentAsset")}
          className="flex items-center gap-3 text-lg font-medium hover:text-yellow-300 transition"
        >
          {openItem === "investmentAsset" ? (
            <MinusSquare className="w-5 h-5" />
          ) : (
            <PlusSquare className="w-5 h-5" />
          )}
          Investment in Asset
        </button>
        {openItem === "investmentAsset" && (
          <p className="mt-2 text-gray-300 leading-relaxed">
            Our disciplined approach identifies opportunities across equities,
            fixed income, real estate, and alternative investments ensuring a
            diversified portfolio built to deliver long-term stability and
            growth.
          </p>
        )}
      </div>

      {/* Item 2 */}
      <div>
        <button
          onClick={() => toggleItem("wealthAdvisory")}
          className="flex items-center gap-3 text-lg font-medium hover:text-yellow-300 transition"
        >
          {openItem === "wealthAdvisory" ? (
            <MinusSquare className="w-5 h-5" />
          ) : (
            <PlusSquare className="w-5 h-5" />
          )}
          Wealth Advisory
        </button>
        {openItem === "wealthAdvisory" && (
          <p className="mt-2 text-gray-300 leading-relaxed">
            Our wealth advisory services offer expert guidance for individuals
            and institutions alike blending strategic planning, portfolio
            optimization, and risk-adjusted decision-making.
          </p>
        )}
      </div>

      {/* Item 3 */}
      <div>
        <button
          onClick={() => toggleItem("institutional")}
          className="flex items-center gap-3 text-lg font-medium hover:text-yellow-300 transition"
        >
          {openItem === "institutional" ? (
            <MinusSquare className="w-5 h-5" />
          ) : (
            <PlusSquare className="w-5 h-5" />
          )}
          Institutional Asset Management
        </button>
        {openItem === "institutional" && (
          <p className="mt-2 text-gray-300 leading-relaxed">
            We partner with institutional investors to design strategies that
            align with fiduciary responsibilities, governance requirements, and
            long-term performance benchmarks.
          </p>
        )}
      </div>
    </div>
  </div>
</motion.section>

{/* Marketing Services Section */}
<section className="max-w-7xl mx-auto px-6 md:px-20 py-20">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, staggerChildren: 0.3 },
      },
    }}
    className="grid md:grid-cols-2 gap-16 items-center"
  >
    {/* Left Image */}
    <motion.div
      variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
      className="flex justify-center items-center"
    >
      <div className="w-full max-w-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
        <img
          src={marketing}
          alt="Marketing Services"
          className="w-full h-[400px] object-cover scale-100 hover:scale-105 transition-transform duration-700"
        />
      </div>
    </motion.div>

    {/* Right Text Section */}
    <div className="space-y-6 self-center">
      <motion.h3
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="text-3xl md:text-4xl font-extrabold text-invest-black"
      >
        Marketing Services
      </motion.h3>

      <motion.p
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="text-lg text-gray-800 leading-relaxed text-justify"
      >
        At Braymont Asset Group, we specialize in a unique blend of marketing services tailored to elevate
        your brand’s presence and influence. With a rich portfolio encompassing some of the biggest
        names in the influencer and YouTube space from Switzerland, France, and Dubai or all around
        the globe, we are equipped to amplify your marketing efforts like never before.
      </motion.p>

      <motion.p
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="text-lg text-gray-800 leading-relaxed text-justify"
      >
        Braymont Asset Group is committed to delivering innovative marketing solutions that drive
        results. Whether you are looking to enhance your social media presence, engage with your
        target audience, or boost brand visibility, our team of experts is here to guide you every
        step of the way.
      </motion.p>
    </div>
  </motion.div>
</section>

{/* Quote Banner Section */}
<section
  className="relative h-[400px] md:h-[450px] flex items-center justify-center text-center bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: `url(${quote})`, 
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

  {/* Animated Content */}
  <div className="relative z-10 max-w-3xl px-6 text-white space-y-6">
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-3xl font-semibold leading-snug"
    >
      “The best time to invest was yesterday. The second best is today with
      experts who turn market movement into opportunity.”
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-lg font-medium text-white/80"
    >
      Warren Buffett
    </motion.p>

<Link to="/contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="mt-4 px-6 py-3 bg-invest-orange text-invest-black font-semibold rounded-full hover:bg-white transition"
  >
    CONTACT US →
  </motion.button>
</Link>
  </div>
</section>

    </section>
  );
};

export default ServicesPage;
