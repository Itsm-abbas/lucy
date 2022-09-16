import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Hire = ({setShowUseDrop}) => {
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("usecase")) {
      setShowUseDrop(false);
    } else {
      setShowUseDrop(true);
    }
  };
  return (
    <div onMouseOver={handleSubmenu} className="relative px-6 md:px-10 lg:px-20 py-40 md:py-10 lg:py-40 lg:pb-32 2xl:px-40 grid lg:grid-cols-2 gap-12 text-black font-Poppins">
      <div className="">
        <h2 className="text-[28px] font-semibold leading-[42px] mb-8 lg:text-[40px] lg:leading-[60px]  ">
          Hire smarter, <br className="sm:hidden"/> not harder
        </h2>
        <p className="text-[18px] font-medium leading-[27px]">
          With Lucy on your side, you&apos;ll find the best candidates in no
          time.
        </p>

        <div className="flex flex-col absolute px-10 lg:px-0 lg:relative bottom-4 md:bottom-14 left-0 w-full ">
          {/* Anchor tags -- start */}
          <div className="w-full h-[1px] bg-black mt-16 lg:mt-[120px]  mb-10 lg:mb-[65px]"></div>
          <a
            className="text-[#1743D7] text-sm lg:text-[18px] mb-4 flex items-center hover:text-black"
            href=""
          >
            Best Ways To Attract Quality Hires &nbsp; <FaArrowRight />
          </a>
          <a
            className="text-[#1743D7] text-sm lg:text-[18px] flex items-center hover:text-black"
            href=""
          >
            End-to-End AI Video Interview Platform &nbsp; <FaArrowRight />
          </a>
        </div>
        {/* Anchor tags -- end */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 grid-rows-2 gap-12">
        <div>
          <div className="mb-4">
            <Image
              src={"/images/hire-icon-1.svg"}
              width={30}
              height={30}
              alt={"img"}
            />
          </div>
          <h2 className="text-2xl lg:text-[36px] font-semibold mb-3 leading-[54px]">Millions</h2>
          <p className="text-base lg:text-[22px] text-[#696969]">
            Job opportunities sent
          </p>
        </div>
        <div>
          <div className="mb-4">
            <Image
              src={"/images/hire-icon-2.svg"}
              width={30}
              height={30}
              alt={"img"}
            />
          </div>
          <h2 className="text-2xl lg:text-[36px] font-semibold mb-3 leading-[54px]">
            10K+ Hired
          </h2>
          <p className="text-base lg:text-lg text-[#696969]">
            Through Lucy Platform
          </p>
        </div>
        <div>
          <div className="mb-4">
            <Image
              src={"/images/hire-icon-3.svg"}
              width={30}
              height={30}
              alt={"img"}
            />
          </div>
          <h2 className="text-2xl lg:text-[36px] font-semibold mb-3 leading-[54px]">100K+</h2>
          <p className="text-base lg:text-lg text-[#696969]">
            Virtual interviews conducted
          </p>
        </div>
        <div>
          <div className="mb-4">
            <Image
              src={"/images/hire-icon-4.svg"}
              width={30}
              height={30}
              alt={"img"}
            />
          </div>
          <h2 className="text-2xl lg:text-[36px] font-semibold mb-3 leading-[54px]">2000+</h2>
          <p className="text-base lg:text-lg text-[#696969]">
            Well-crafted interview questions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hire;
