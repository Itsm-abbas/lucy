import Image from "next/image";
import React from "react";
const Main = ({ setShowUseDrop }) => {
  // Handle submit function for use case dropdown
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("usecase")) {
      setShowUseDrop(false);
    } else {
      setShowUseDrop(true);
    }
  };
  return (
    <main onMouseOver={handleSubmenu}>
      <div className="relative h-[120vh] md:h-auto bg-[#19181A] text-white pt-56 lg:pt-60 md:pt-42  lg:pb-0 pl-8 md:pl-16 lg:pl-28  2xl:px-44 pb-0 font-Poppins overflow-hidden">
        <div className="gradient5 absolute left-0 top-0 w-60 md:w-[400px] h-full"></div>
        <div className="gradient2 absolute right-0 top-0 w-44 md:w-96 h-full"></div>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="z-10">
            <h1 className="text-[32px] leading-[48px] lg:max-w-sm xl:max-w-lg capitalize font-semibold mb-6 pr-7 lg:pr-0 md:text-3xl lg:text-[40px]   lg:leading-[55px]">
              Get the true edge over{" "}
              <br className="hidden sm:block md:hidden" /> recruiting with Lucy
              AI
            </h1>
            <p className="text-[18px] sm:text-[24px] font-normal capitalize mb-10 ">
              hiring made easy
            </p>
            <button className="btn-green shadow-md px-10 font-bold text-sm">
              Try Lucy Free
            </button>
          </div>
          <div className=" md:relative w-[500px]  md:w-[1200px] lg:w-[800px] md:h-[22rem] lg:h-[24rem] ">
            {/* <div class="relative flex items-center justify-center h-full w-[44rem] mb-12 overflow-hidden"> */}
            <video
              loop
              autoPlay
              muted
              class=" absolute  ml-36 sm:ml-60 md:ml-0 bottom-0 md:-right-40 lg:-right-36 z-30 w-full min-w-full  max-w-6xl"
            >
              <source
                src="/videos/Lucy hero section transparent.webm"
                type="video/mp4"
              />
            </video>
            <div className=" absolute -right-52 w-80 h-[420px] sm:h-[350px] sm:right-28 md:right-20 md:h-60 lg:h-[350px] lg:right-64 bottom-0  border-b-0 rounded-t-full border-2 border-[#C4F000]"></div>
          </div>
          {/* <div className="absolute right-10 sm:-right-60 md:right-0 z-10 sm:-top-32 md:top-14 lg:right-0 lg:-top-8 xl:right-24 h-full w-full"> */}
          {/* <iframe
                className="bg-transparent"
                height="200%"
                width="200%;"
                src="https://embed.wave.video/oh8UwEjhZVPpM524"
                allow="autoplay; fullscreen"
              ></iframe> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* **** */}
      <div className="grid md:grid-cols-5 gap-12 md:gap-20 pl-6  md:pl-20 py-20 lg:py-28 2xl:pl-40 font-Poppins">
        <div className="pr-8 md:pr-0 md:col-span-2">
          <p className="text-[28px] sm:text-[32px]  leading-[42px] sm:leading-[48px] md:text-3xl lg:text-[40px] md:leading-[60px] text-[#191919] font-semibold ">
            Trusted by forward-thinking companies who value ease of use over
            complexity
          </p>
        </div>
        <div className="flex items-center md:col-span-3 ">
          <div className="flex w-full overflow-x-scroll   scrollbar-hide gap-2 py-8 px-4">
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
