import React from "react";
import { ChevronUp } from "lucide-react";

const Footer = ({ fixed = false }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full bg-invest-black text-invest-white py-6 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center ${
        fixed ? "fixed bottom-0 left-0 z-50" : ""
      }`}
    >
      {/* Left: Copyright */}
      <p className="text-sm text-invest-silver">
        © Copyright Braymont Asset Group, {currentYear}. All rights reserved.
      </p>

      {/* Right: Disclosure Button */}
      <button className="flex items-center gap-2 text-invest-silver hover:text-invest-orange transition">
        <ChevronUp className="w-4 h-4" />
        <span className="uppercase font-semibold tracking-wide">Disclosure</span>
      </button>
    </footer>
  );
};

export default Footer;
