/* eslint-disable @next/next/no-sync-scripts */
import Script from "next/script";
import React from "react";

const Expert = ({setShowUseDrop}) => {
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("usecase")) {
      setShowUseDrop(false);
    } else {
      setShowUseDrop(true);
    }
  };
  return (
    <div onMouseOver={handleSubmenu} className="bg-[#F2EDE4]   px-2 md:px-20 py-20 lg:px-52 font-Poppins">
      <div className="w-full mb-16 text-[28px]  lg:text-[40px] font-semibold leading-[42px] lg:leading-[60px]">
        Experts says...
      </div>
      <div class="powr-music-player" id="63bdb70b_1639211568"></div>
      <Script src="https://www.powr.io/powr.js?platform=html" />
    </div>
  );
};

export default Expert;
