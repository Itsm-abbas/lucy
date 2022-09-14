import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <main>
      <div className="relative bg-[#19181A] text-white pt-20 md:pt-28 md:pb-20 lg:pb-0 px-8 md:px-16 lg:px-28 2xl:px-44 pb-0 font-Poppins overflow-hidden">
        <div className="gradient w-44 md:w-[400px] h-2/3"></div>
        <div className="gradient2 w-44 md:w-96 h-full"></div>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl capitalize font-semibold mb-6 leading-10  lg:leading-[55px]">
              Get the true edge over <br /> recruiting with Lucy AI
            </h1>
            <p className="text-2xl font-normal capitalize mb-10 ">
              hiring made easy
            </p>
            <button className="btn-green shadow-md px-10">Try Lucy Free</button>
          </div>
          <div className="relative w-80 h-[380px] md:w-96 md:h-96  ">
            <div className="absolute right-24 lg:right-52 top-8 md:top-14 lg:-top-8 h-full w-full">
              <iframe
                className="bg-transparent"
                height="200%"
                width="200%;"
                src="https://embed.wave.video/7JC0cVHLBMFtbQQA"
                frameborder="0"
                allow="autoplay; fullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
{/* **** */}
      <div className="grid md:grid-cols-5 gap-12 md:gap-20 pl-6  md:pl-20 py-20 lg:py-28 2xl:pl-40 font-Poppins">
        <div className="pr-8 md:pr-0 md:col-span-2">
          <p className="text-2xl md:text-3xl lg:4xl text-[#191919] font-semibold ">
            Trusted by forward-thinking companies who value ease of use over
            complexity
          </p>
        </div>
        <div className="flex items-center md:col-span-3 ">
          <div className="flex w-full overflow-x-scroll scrollbar-hide gap-2 py-8 px-4">
            {[
              "/images/main-img_3.svg",
              "/images/main-img_4.svg",
              "/images/main-img_5.svg",
              "/images/main-img_11.svg",
              "/images/main-img_12.svg",
            ].map((src) => (
              <div
                key={src}
                className="flex-shrink-0 rounded-xl py-6 px-6 shadow-lg"
              >
                <Image src={src} width={"210px"} height={"50px"} alt={src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
