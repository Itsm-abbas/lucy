import Image from "next/image";
import React, { useEffect, useState } from "react";

const Recruitment = () => {
  const [interview, setinterview] = useState(false)
  const [dashboard, setDashboard] = useState(false)
  const [chat, setChat] = useState(false)
  const clickHandler = (e)=>{
    let text = e.target.textContent;
    if(text === "AI interview"){
      setinterview(true)
      setDashboard(false)
      setChat(false)
    }
    else if(text === "ATS"){
      setDashboard(true)
      setinterview(false)
      setChat(false)
    }
    else if(text === "Chat"){
      setChat(true)
      setinterview(false)
      setDashboard(false)
    }
  }
  useEffect(() => {
   setinterview(true)
  }, [])
  
  return (
    <div className="bg-[#F2EDE4] pt-20 px-4 md:px-16 lg:px-28 2xl:px-44 font-Poppins font-semibold overflow-hidden">
      <div className="relative flex flex-col items-center text-[#191919] ">
        <div className="gradient h-full w-40 md:w-96 "></div>

        <h1 className="text-4xl mb-6">Strong products for your recruitments</h1>
        <p className="mb-12">
          Get back 60% of your time you&apos;re now spending on recruiting and
          busywork.
        </p>
        <div className="bg-[#191919] w-[350px] md:w-[410px] py-1 px-1 rounded-[36px] flex justify-between items-center mb-28 z-50">
          <button onClick={(e)=>clickHandler(e)} className={`${interview ? "bg-white text-black":""}  rounded-[36px] hover:bg-white hover:text-black text-white px-3 py-1`}>AI interview</button>
          <button onClick={(e)=>clickHandler(e)} className={`${dashboard ? "bg-white text-black":""}  rounded-[36px] text-white hover:bg-white hover:text-black px-8 py-1 `}>ATS</button>
          <button onClick={(e)=>clickHandler(e)} className={`${chat ? "bg-white text-black":""} text-white rounded-[36px] hover:bg-white hover:text-black px-8 py-1 `}>Chat</button>
        </div>
      </div>
      {/* First slide */}
      {interview && <div className="relative  bg-white border-t-8 border-r-8 border-l-8 h-full border-black border-solid  rounded-2xl w-full px-5 md:px-16 pt-12 ">
        <div className="absolute -right-10 top-60 md:-top-8 z-10">
          <img
            className="rounded-xl w-48 h-28 md:w-80 md:h-48 lg:w-[350px] lg:h-52 xl:w-[450px] xl:h-64"
            src={"/images/main-img_7.svg"}
            alt="img"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/images/player-icon.svg"}
              width={30}
              height={30}
              alt="player"
            />
          </div>
          <div className="flex justify-center items-center absolute left-4 bottom-1 md:bottom-2 lg:bottom-8 px-2 md:px-4 py-1 md:py-2 rounded-3xl bg-[#69696999]">
            <img
            
              className="rounded-full w-7 h-7 md:w-11 md:h-11"
              src={"/images/small-img.svg"}

              alt={"small"}
            />x``
            <div className="flex flex-col text-white ml-1 lg:ml-3">
              <h2 className="text-[6px] md:text-xs font-medium">Andrexa Davis</h2>
              <p className="text-[6px] md:text-[6px] font-light">Graphic Designer</p>

            </div>
          </div>
        </div>
        <div className="absolute -right-10 top-80 md:top-60 z-10">
          <img
            className="rounded-xl w-48 h-44 md:w-80 md:h-60 lg:w-[350px] lg:h-52 xl:w-[450px] xl:h-64"
            src={"/images/main-img_8.svg"}
            alt="img"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/images/player-icon.svg"}
              width={30}
              height={30}
              alt="player"
            />
          </div>
          <div className="flex justify-center items-center absolute left-0 md:left-4 bottom-8 px-2 md:px-4 py-1 md:py-2 rounded-3xl bg-[#69696999]">
            <img
              className="rounded-full w-7 h-7 md:w-11 md:h-11"
              src={"/images/small-img_2.svg"}
              alt={"small"}
            />
            <div className="flex flex-col text-white ml-2 md:ml-3">
              <h2 className="text-[6px] md:text-xs font-medium">Andrexa Davis</h2>
              <p className="text-[6px] md:text-[6px] font-light">Graphic Designer</p>
            </div>
          </div>
        </div>
        <h1 className="font-medium text-xl md:text-2xl mb-6  border-gray-500 border-b-[1px] pb-5">
          AP Company - Project Manager
        </h1>
        <h1 className="font-medium text-[12px] md:text-lg lg:text-2xl mb-8 flex items-center">
          <span className="rounded-full py-1 md:py-2 font-bold text-white px-2  mr-2 md:px-4 md:mr-4 text-xs  md:text-base bg-black">
            1
          </span>
          Hey &nbsp;<b>Luka Huang!&nbsp;</b> Welcome to the
          interview.
        </h1>
        <p className="font-normal text-[10px] md:text-sm max-w-xl mb-10">
          We love your profile and are interested in learning a little more
          about you! <br className="hidden md:flex"/> Thank you for accepting our virtual interview
          invitation.
        </p>
        <div className=" overflow-hidden relative">
          <img
            className="w-full h-60 md:h-auto"
            src={"/images/main-img_6.svg"}
            alt="bg-img"
          />
          <div className="absolute top-2/3 left-1/3">
            <Image
              src={"/images/player-icon.svg"}
              width={50}
              height={50}
              alt="player"
            />
          </div>
        </div>
        <div className="hidden p-6 bg-white rounded-lg absolute -left-20 bottom-20 z-20 max-w-md shadow-xl">
          <h2 className="text-[#A3A3A3]">
            <span className="text-2xl text-white">Q1</span> Management / Project
            Manager
          </h2>
          <p>
            It&apos;s your first day at work and you meet your team for the
            first time, what do you say to them to get them motivated and trust
            you?
          </p>
        </div>
      </div>}
      {/* Dashboard slide */}
    { dashboard &&  <div className="bg-img-dashboard h-72  md:h-[70vh] lg:h-[80vh] xl:h-screen w-full relative">
        <div className="absolute -bottom-0 left-[calc(100%-85%)]">
          <img className="w-48 md:w-80 md:h-60" src={"/images/dashboard_2.svg"} alt="dashbaord_2"/>
        </div>
        <div className="absolute top-0 -right-16 md:top-24 lg:-top-32 lg:-bottom-32 md:-right-28">
          <img className="w-40 h-60 md:w-72 md:h-80 lg:w-72 lg:h-full " src={"/images/dashboard_3.svg"} alt="dashbaord_2"/>
        </div>
      </div>}
      {/* Chat slide */}
      {chat && <div className="bg-img-chat h-72  md:h-[70vh] lg:h-[80vh] xl:h-screen w-full relative">
      <div className="absolute top-0 -right-8 md:top-24   md:-right-28">
          <img className="w-52 h-80 md:hidden lg:flex lg:w-[450px] lg:h-[550px] xl:w-[550px] xl:h-[650px]" src={"/images/chat-2.svg"} alt="dashbaord_2"/>
          <div className="hidden md:flex lg:hidden">
          <img
            className="rounded-xl w-48 h-28 md:w-80 md:h-48 lg:w-[350px] lg:h-52 xl:w-[450px] xl:h-64"
            src={"/images/main-img_7.svg"}
            alt="img"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/images/player-icon.svg"}
              width={30}
              height={30}
              alt="player"
            />
          </div>
          <div className="flex justify-center items-center absolute left-4 bottom-1 md:bottom-2 lg:bottom-8 px-4 py-1 md:py-2 rounded-3xl bg-[#69696999]">
            <img
            
              className="rounded-full w-7 h-7 md:w-11 md:h-11"
              src={"/images/small-img.svg"}

              alt={"small"}
            />x``
            <div className="flex flex-col text-white ml-1 lg:ml-3">
              <h2 className="text-[6px] md:text-xs font-medium">Andrexa Davis</h2>
              <p className="text-[6px] md:text-[6px] font-light">Graphic Designer</p>

            </div>
          </div>
        </div>
        <div className="absolute hidden md:flex lg:hidden">
          <img
            className="rounded-xl w-48 h-44 md:w-80 md:h-60 lg:w-[350px] lg:h-52 xl:w-[450px] xl:h-64"
            src={"/images/main-img_8.svg"}
            alt="img"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={"/images/player-icon.svg"}
              width={30}
              height={30}
              alt="player"
            />
          </div>
          <div className="flex justify-center items-center absolute left-0 md:left-4 bottom-8 px-2 md:px-4 py-1 md:py-2 rounded-3xl bg-[#69696999]">
            <img
              className="rounded-full w-7 h-7 md:w-11 md:h-11"
              src={"/images/small-img_2.svg"}
              alt={"small"}
            />
            <div className="flex flex-col text-white ml-2 md:ml-3">
              <h2 className="text-[6px] md:text-xs font-medium">Andrexa Davis</h2>
              <p className="text-[6px] md:text-[6px] font-light">Graphic Designer</p>
            </div>
          </div>
        </div>
        </div>
        
      </div>}
      {/*  */}
      <div className="pt-40 grid lg:grid-cols-2 relative">
        {/* gradient */}
        <div className="gradient2 h-full w-40 md:w-96 "></div>
        <div className="pb-20 ">
          <h2 className="text-3xl mb-6 text-black">
            Automated recruiting process help you to focus on what matters the
            most
          </h2>
          <p className="text-sm mb-14">
            From director labors to executives, Lucy transforms how you screen,
            interview and hire talent.
          </p>
          <button className="btn-black px-6">Try Lucy Free</button>
        </div>
        <div className="relative max-w-sm flex justify-start">
          <div className="h-full flex">
            <img
              className="z-10 w-[270px] h-[290px]  md:w-[335px] md:h-[360px]"
              src={"/images/mbl-img.svg"}
              alt="mbl-img"
            />
          </div>
          <div className="absolute -top-4 -right-16 md:-right-40 lg:-right-30 ">
            <img
            className="w-[270px] h-[270px] md:w-[335px] md:h-[360px]"
              src={"/images/mbl-img_2.svg"}
              alt="mbl-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
