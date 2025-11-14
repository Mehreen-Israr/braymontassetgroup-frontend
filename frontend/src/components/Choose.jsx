import React, { useEffect, useState } from 'react';

const Choose = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-invest-black text-invest-white py-16 px-6 md:px-20">
      <div className={`max-w-7xl mx-auto grid md:grid-cols-3 gap-0 items-end transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Card 1: Intro */}
        <div className="group relative bg-invest-silver h-[400px] p-6 shadow-md overflow-hidden transition-all duration-300 hover:bg-invest-orange translate-y-[100px] md:translate-y-0">
          <div className="absolute inset-0 bg-invest-orange scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 z-0" />
          <div className="relative z-10 flex flex-col justify-center h-full">
            <h2 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors">
              Why You Should Choose Us
            </h2>
            <p className="text-invest-black text-base mb-2 group-hover:text-black transition-colors text-justify">
              So, why should you choose Braymont Asset Group?
            </p>
            <p className="text-invest-black group-hover:text-black transition-colors text-justify">
              Here are just a few reasons:
            </p>
          </div>
        </div>

        {/* Card 2: Experienced Team */}
        <div className="group relative bg-invest-gray h-[300px] p-6 shadow-md overflow-hidden transition-all duration-300 hover:bg-invest-orange flex flex-col justify-center">
          <div className="absolute inset-0 bg-invest-orange scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100 z-0" />
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-black transition-colors">
              Experienced Team
            </h3>
            <p className="text-invest-silver text-sm leading-relaxed group-hover:text-black transition-colors text-justify">
              Our team of experts has years of experience in the financial industry, ensuring that your investments are in good hands. We provide valuable insights to help you make informed decisions.
            </p>
          </div>
        </div>

        {/* Card 3: Comprehensive Services */}
        <div className="group relative bg-invest-white text-black h-[300px] p-6 shadow-md overflow-hidden transition-all duration-300 hover:text-black flex flex-col justify-center ">
          <div className="absolute inset-0 bg-invest-orange scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 z-0" />
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-black">
              Comprehensive Services
            </h3>
            <p className="text-sm leading-relaxed transition-colors group-hover:text-black text-justify">
              We offer a wide range of services under one roof from wealth and asset management to real estate and marketing making it easy to manage your finances with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;