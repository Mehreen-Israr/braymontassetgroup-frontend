import React from "react";
import { motion } from "framer-motion";
import { Building2, Info } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const ImpressumPage = () => {
  return (
    <section className="bg-gradient-to-b from-invest-white via-gray-50 to-invest-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">
        {/* Title */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-invest-orange to-invest-black bg-clip-text text-transparent"
        >
          Impressum
        </motion.h1>

        {/* Company Name */}
        <motion.h2
          variants={fadeInUp}
          custom={0.2}
          className="text-2xl font-semibold text-center text-invest-black mb-10"
        >
          Braymont Asset Group
        </motion.h2>

        {/* Grid Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Commercial Info Card */}
          <motion.div
            variants={fadeInUp}
            custom={0.3}
            className="group relative bg-invest-silver rounded-xl p-6 shadow-md overflow-hidden transition-all duration-300 hover:bg-invest-orange"
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-invest-orange scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 z-0" />

            {/* Card content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="text-invest-black w-6 h-6 group-hover:text-black transition-colors" />
                <h3 className="text-xl font-bold text-invest-black uppercase group-hover:text-black transition-colors">
                  Commercial Register Information
                </h3>
              </div>
              <ul className="text-gray-800 space-y-2 text-md leading-relaxed group-hover:text-black transition-colors">
                <li>Entry in the commercial register: 19.12.2012</li>
                <li>Legal form: Company limited by shares (AG)</li>
                <li>Legal headquarters: Zug</li>
                <li>Commercial Registry Office: ZG</li>
                <li>Commercial register number: CH-170.3.037.501-7</li>
                <li>VAT number: CHE-375.236.593</li>
              </ul>
            </div>
          </motion.div>

          {/* About Section Card */}
          <motion.div
            variants={fadeInUp}
            custom={0.4}
            className="group relative bg-invest-silver rounded-xl p-6 shadow-md overflow-hidden transition-all duration-300 hover:bg-invest-orange"
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-invest-orange scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0" />

            {/* Card content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Info className="text-invest-black w-6 h-6 group-hover:text-black transition-colors" />
                <h3 className="text-xl font-bold text-invest-black uppercase group-hover:text-black transition-colors">
                  About
                </h3>
              </div>
              <p className="text-gray-800 text-md leading-relaxed group-hover:text-black transition-colors">
                Sector: Operation of other financial institutions.
                <br />
                Purpose: Acquisition, management, and exploitation of
                investments in all types of companies, both domestic and
                foreign, as well as all transactions directly or indirectly
                related to its purpose. Full description of purpose according to
                the statutes.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpressumPage;
