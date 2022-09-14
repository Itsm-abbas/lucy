import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Hire = () => {
  return (
    <div className="relative px-10 lg:px-20 py-40 md:py-10 lg:py-40 lg:pb-32 2xl:px-40 grid lg:grid-cols-2 gap-12 text-black font-Poppins">
      <div className="">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
          Hire smarter, not harder
        </h2>
        <p>
          With Lucy on your side, you&apos;ll find the best candidates in no
          time.
        </p>
        {/* Line */}
        <div className="flex flex-col absolute px-10 lg:px-0 lg:relative bottom-4 md:bottom-14 left-0 w-full ">
          <div className="w-full h-[1px] bg-black mt-16  mb-10"></div>
          <a
            className="text-[#1743D7] text-sm lg:text-base flex items-center hover:text-black"
            href=""
          >
            Best Ways To Attract Quality Hires &nbsp; <FaArrowRight />
          </a>
          <a
            className="text-[#1743D7] text-sm lg:text-base flex items-center hover:text-black"
            href=""
          >
            End-to-End AI Video Interview Platform &nbsp; <FaArrowRight />
          </a>
        </div>
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
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">Millions</h2>
          <p className="text-base lg:text-lg text-[#696969]">
            {" "}
            Job opportunities sent{" "}
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
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            10K+ Hired
          </h2>
          <p className="text-base lg:text-lg text-[#696969]">
            {" "}
            Through Lucy Platform{" "}
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
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">100K+</h2>
          <p className="text-base lg:text-lg text-[#696969]">
            {" "}
            Virtual interviews conducted{" "}
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
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">2000+</h2>
          <p className="text-base lg:text-lg text-[#696969]">
            {" "}
            Well-crafted interview questions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hire;
