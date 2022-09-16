/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Recruitment = () => {
  const [interview, setinterview] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [chat, setChat] = useState(false);
  // Click handler function for buttons
  const clickHandler = (e) => {
    let text = e.target.textContent;
    if (text === "AI interview") {
      setinterview(true);
      setDashboard(false);
      setChat(false);
    } else if (text === "ATS") {
      setDashboard(true);
      setinterview(false);
      setChat(false);
    } else if (text === "Chat") {
      setChat(true);
      setinterview(false);
      setDashboard(false);
    }
  };
  useEffect(() => {
    setinterview(true);
  }, []);

  return (
    <div className="bg-[#F2EDE4] pt-20 px-4 md:px-16 lg:px-28 xl:pt-[120px] font-Poppins font-semibold overflow-hidden">
      <div className="relative flex flex-col items-center text-[#191919]  ">
        <div className="gradient h-full w-40 md:w-96 -left-20"></div>
        <p className="font-semibold text-[28px]  leading-[42px] text-center  md:text-[40px] md:leading-[60px] mb-6 ">
          Strong products for <br className="sm:hidden" /> your recruitment
        </p>
        <p className="mb-12 font-medium text-[18px] px-14 text-center leading-[27px]">
          Get back 60% of your time you&apos;re now spending on recruiting and
          busywork.
        </p>
        {/* Buttons -- start */}
        <div className="bg-[#191919] h-[58px] w-[382px] sm:w-[472px] py-1 px-2 rounded-[36px] flex justify-between items-center mb-28 z-20">
          <button
            onClick={(e) => clickHandler(e)}
            className={`${
              interview ? "bg-white text-black" : ""
            }  rounded-[36px] text-white hover:bg-white hover:text-black  w-[148px] mr-[6px] mt-[7px] mb-[7px] h-[44px] `}
          >
            AI interview
          </button>
          <button
            onClick={(e) => clickHandler(e)}
            className={`${
              dashboard ? "bg-white text-black" : ""
            }  rounded-[36px] text-white hover:bg-white hover:text-black  w-[148px] mr-[6px] mt-[7px] mb-[7px] h-[44px] `}
          >
            ATS
          </button>
          <button
            onClick={(e) => clickHandler(e)}
            className={`${
              chat ? "bg-white text-black" : ""
            } text-white rounded-[36px] hover:bg-white hover:text-black  w-[148px] mt-[7px] mb-[7px] h-[44px] `}
          >
            Chat
          </button>
        </div>
        {/* Buttons -- end */}
      </div>
      {/* First slide (Ai interview) -- start */}
      {interview && (
        <div className="relative  bg-white  border-l-8 h-full border-black border-t-8 border-r-8 rounded-br-none rounded-bl-none border-solid  rounded-2xl w-full px-5 md:px-16 pt-12  ">
          <div className="absolute -right-10 top-60 lg:-top-16 lg:-right-24 z-10">
            <img
              className="rounded-xl w-48 h-full lg:w-[350px]  xl:w-[500.96px]  "
              src={"/images/main-img_7.svg"}
              alt="img"
            />
            {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                className="w-5 h-full lg:w-8 "
                src={"/images/player-icon.svg"}
                alt="player"
              />
            </div>
            <div className="flex justify-center items-center absolute left-0 md:left-4 bottom-1  lg:bottom-3 px-2 lg:px-4 py-1 md:py-2 rounded-3xl bg-[#69696999]">
              <img
                className="rounded-full w-7 h-full lg:w-11 "
                src={"/images/small-img.svg"}
                alt={"small"}
              />
              <div className="flex flex-col text-white ml-1 lg:ml-3">
                <h2 className="text-[6px] lg:text-xs font-medium">
                  Andrexa Davis
                </h2>
                <p className="text-[6px] lg:text-[6px] font-light">
                  Graphic Designer
                </p>
              </div>
            </div> */}
          </div>
          <div className="absolute -right-10 top-[360px]  lg:-right-24 lg:top-48 xl:top-64 z-10">
            <img
              className="rounded-xl w-48 h-full  lg:w-[350px]  xl:w-[500.96px] "
              src={"/images/main-img_8.svg"}
              alt="img"
            />
            {/* <div className="absolute bottom-3 right-7 lg:right-5">
              <img
                className="w-5 h-full lg:w-8 "
                src={"/images/volume-icon.svg"}
                alt="player"
              />
            </div>
            <div className="flex justify-center items-center absolute left-0 md:left-4 bottom-1 md:bottom-2 lg:bottom-3 px-2 md:px-4 py-1 md:py-2 rounded-3xl bg-[#69696999]">
              <img
                className="rounded-full w-7 h-full lg:w-11 "
                src={"/images/small-img_2.svg"}
                alt={"small"}
              />
              <div className="flex flex-col text-white ml-2 md:ml-3">
                <h2 className="text-[6px] lg:text-xs font-medium">
                  Andrexa Davis
                </h2>
                <p className="text-[6px] lg:text-[6px] font-light">
                  Graphic Designer
                </p>
              </div>
            </div> */}
          </div>
          <h1 className="font-semibold text-xl md:text-2xl mb-6  border-gray-500 border-b-[1px] pb-5">
            AP Company - Project Manager
          </h1>
          <h1 className="font-medium text-[12px] md:text-lg lg:text-2xl mb-8 flex items-center">
            <span className="rounded-full py-1 md:py-2 font-bold text-white px-2  mr-2 md:px-4 md:mr-4 text-xs  md:text-base bg-black">
              1
            </span>
            Hey &nbsp;<b>Luka Huang!&nbsp;</b> Welcome to the interview.
          </h1>
          <p className="font-normal text-[10px] md:text-sm max-w-xl mb-10">
            We love your profile and are interested in learning a little more
            about you! <br className="hidden md:flex" /> Thank you for accepting
            our virtual interview invitation.
          </p>
          <div className=" overflow-hidden relative">
            <img
              className="w-full h-40 sm:h-44 lg:h-[350px] object-cover md:h-auto rounded-tl-2xl"
              src={"/images/main-img_6.webp"}
              alt="bg-img"
            />
            <div className="absolute top-2/3 left-[40%]">
              <img
                className="w-25 h-25 lg:w-[40px] lg:h-[40px]"
                src={"/images/player-icon.svg"}
                alt="player"
              />
            </div>
          </div>
          <div className=" rounded-lg absolute bottom-24 -left-6 md:-left-20 md:bottom-20 z-20 ">
            <img
              className="w-44 md:w-72 lg:w-96 h-full"
              src="/images/question.svg"
              alt="question"
            />
          </div>
        </div>
      )}
      {/* First slide (Ai interview) -- end */}

      {/* 2nd slide (Dashboard) -- start */}
      {dashboard && (
        <div className=" bg-img-dashboard h-72  md:h-[70vh] lg:h-[80vh] xl:h-screen w-full relative">
          <div className="absolute -bottom-0 left-[calc(100%-85%)]">
            <img
              className="w-48 h-full md:w-80 lg:w-96 xl:w-[480px]"
              src={"/images/dashboard_2.svg"}
              alt="dashbaord_2"
            />
          </div>
          <div className="absolute top-48 -right-2 md:top-6 lg:-top-24 lg:-bottom-20 xl:-top-5 md:-right-28">
            <img
              className="w-full h-44 md:w-60 md:h-96 lg:w-72 lg:h-[600px] xl:h-[700px] xl:w-80 "
              src={"/images/dashboard_3.webp"}
              alt="dashbaord_2"
            />
          </div>
        </div>
      )}
      {/* 2nd slide (Dashboard) -- end */}

      {/* 3rd slide (Chat) -- start */}
      {chat && (
        <div className="bg-img-chat h-72  md:h-[70vh] lg:h-[80vh] xl:h-screen w-full relative rounded-2xl border-black border-t-8 border-r-8 rounded-br-none rounded-bl border-l-8 border-solid">
          <div className="absolute top-0 -right-8 md:top-24   md:-right-28">
            <img
              className="w-52 h-80  lg:flex lg:w-[450px] lg:h-[550px] xl:w-[550px] xl:h-[650px]"
              src={"/images/chat-2.webp"}
              alt="dashbaord_2"
            />
          </div>
        </div>
      )}
      {/* 3rd slide (Chat) -- end */}

      {/* bottom section */}
      <div className="pt-40 grid lg:grid-cols-2 relative">
        {/* gradient */}
        <div className="gradient h-80  -right-96 rounded-full transform rotate-45 bottom-20 w-40 md:w-96 "></div>
        {/* gradient */}
        <div className="pb-20 px-7 sm:px-12 lg:px-0">
          <h2 className="text-[28px] pr-4 sm:pr-0  leading-[42px] md:text-[40px] z-10 font-semibold md:leading-[60px] mb-6 text-black">
            Automated recruiting process help you to focus on what matters the
            most
          </h2>
          <p className="text-lg z-10 leading-[27px] font-medium mb-14">
            From director labors to executives, Lucy transforms how you screen,
            interview and hire talent.
          </p>
          <button className="btn-black h-[48px] w-[173px] text-[14px] rounded-[5px] tracking-[.1rem]">
            Try Lucy Free
          </button>
        </div>
        <div className="relative max-w-sm flex justify-start">
          <div className="h-full flex">
            <img
              className="z-10 w-[270px] h-[290px]  md:w-[335px] md:h-[360px] lg:absolute lg:bottom-0"
              src={"/images/mbl-img.webp"}
              alt="mbl-img"
            />
          </div>
          <div className="absolute top-2 -right-14  md:-right-40 lg:-right-30  lg:bottom-11 lg:top-auto ">
            <img
              className="w-[270px] h-[240px] md:w-[335px] md:h-[300px]"
              src={"/images/mbl-img_2.webp"}
              alt="mbl-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
