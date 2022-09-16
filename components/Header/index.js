/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const Header = ({ showUseDrop, setShowUseDrop }) => {
  // Use state hook
  const [showNavMbl, setShowNavMbl] = useState(false);
  const [showUseMbl, setShowUseMbl] = useState(false);

  // Handle submenu function for use cases dropdown
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("usecase")) {
      setShowUseDrop(false);
    } else {
      setShowUseDrop(true);
    }
  };
  return (
    <header
      onMouseOver={handleSubmenu}
      className="fixed h-[116px] lg-[109px] flex z-50 right-0 left-0 justify-between items-center text-white px-8  lg:px-20 2xl:px-40  2xl:h-24 bg-[#191919] font-Poppins shadow-xl"
    >
      <div className="flex justify-between items-center w-28 h-8  ">
        <Image
          src={"/images/icon.svg"}
          alt={"icon"}
          width={27.75}
          height={32.95}
        />
        <Image
          src={"/images/icon-2.svg"}
          alt={"icon"}
          width={75.69}
          height={15.21}
        />
      </div>
      <div className="hidden md:flex justify-center items-center flex-grow h-full">
        {/* Header links -- start */}
        <ul className="flex gap-14 items-center h-full md:text-[18px]">
          <li className="capitalize">
            <Link href={"/"}>
              <a className="capitalize anchor-hover">why us</a>
            </Link>
          </li>
          <li className="usecase capatalize h-full">
            <button className="usecase h-full flex items-center capitalize anchor-hover">
              use cases <FaChevronDown className="ml-4 usecase" />
            </button>
          </li>
          <li className="capitalize">
            <Link href={"/"}>
              <a className="capitalize anchor-hover">pricing</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex justify-center items-center gap-8">
        <Link href={"/"}>
          <button className="btn-transparent p-[10px] font-bold text-[14px] leading-[21px]">
            sign in
          </button>
        </Link>
        <Link href={"/"}>
          <button className="btn-green p-[10px] font-bold text-[14px] leading-[21px]">
            try lucy free
          </button>
        </Link>
      </div>
      {/* Header links -- end */}

      {/* Use Case Dropdown desktop -- start */}
      <div
        className={`usecase md:grid gap-10 grid-cols-3 absolute top-full z-50 left-0 right-0 w-full  overflow-hidden shadow-xl ${
          showUseDrop ?  " h-80 py-14  md:px-8 lg:px-20 2xl:px-40" : "h-0"
        } bg-white text-black  hidden   transition-all duration-500 ease-in-out`}
      >
        <div className={`${!showUseDrop ? "hidden" : "flex"} usecase  flex-col gap-6 `}>
          <div className="usecase  flex gap-4 items-center px-3 py-4 rounded-lg hover:bg-[#C4F0004D] transition-all duration-200 cursor-pointer">
            <Image
              className="usecase"
              src={"/images/submenu-icon.svg"}
              width={40}
              height={40}
              alt="icon"
            />
            <p className="usecase text-base lg:text-lg font-medium ">
              Asynchronous interview from SMB to Entreprise
            </p>
          </div>
          <div className="usecase flex gap-4 items-center px-3 py-4 rounded-lg hover:bg-[#C4F0004D] transition-all duration-200 cursor-pointer">
            <Image
              className="usecase"
              src={"/images/submenu-icon-2.svg"}
              width={40}
              height={40}
              alt="icon"
            />
            <p className="usecase text-base lg:text-lg font-medium ">Founder Pitch Pool</p>
          </div>
        </div>
        <div className={`${!showUseDrop ? "hidden" : "flex"} usecase flex-col gap-6 `}>
          <div className="usecase flex gap-4 items-center px-3 py-4 rounded-lg hover:bg-[#C4F0004D] transition-all duration-200 cursor-pointer">
            <Image
              className="usecase"
              src={"/images/submenu-icon-3.svg"}
              width={40}
              height={40}
              alt="icon"
            />
            <p className="usecase text-base lg:text-lg font-medium ">
              Model Management Company
            </p>
          </div>
          <div className="usecase flex gap-4 items-center px-3 py-4 rounded-lg hover:bg-[#C4F0004D] transition-all duration-200 cursor-pointer">
            <Image
              className="usecase"
              src={"/images/submenu-icon-4.svg"}
              width={40}
              height={40}
              alt="icon"
            />
            <p className="usecase text-base lg:text-lg font-medium ">
              School Admission Interview
            </p>
          </div>
        </div>
        <div className={`${!showUseDrop ? "hidden" : "flex"} usecase justify-end items-start `}>
          <Image
            width={129}
            height={165}
            className="usecase"
            src="/images/submenu-img.svg"
            alt="img"
          />
          <div className="usecase flex flex-col items-center">
            <Image
              width={85}
              height={58}
              className="usecase"
              src="/images/submenu-img-2.svg"
              alt="img"
            />
            <Image
              width={99}
              height={106}
              className="usecase "
              src="/images/submenu-im-3.svg"
              alt="img"
            />
          </div>
          <Image
            width={199}
            height={165}
            className="usecase  md:h-32 lg:h-36"
            src="/images/submenu-img-4.svg"
            alt="img"
          />
        </div>
      </div>
      {/* Use Case Dropdown desktop -- end */}
      {/* Mobile navigation -- start */}
      <div
        className={`${
          showNavMbl ? `${showUseMbl ? "h-[750px] py-7":"h-96 py-7"} ` : "h-0  "
        } z-50 transition-all duration-300 absolute shadow-2xl md:hidden  text-black px-5  top-full left-0 right-0 bg-white overflow-hidden`}
      >
        {/* Mobile header links -- start */}
        <ul className="flex flex-col text-[22px] ">
          <li className="py-4 capitalize border-b border-gray-400   ">
            <Link href={"/"}>
              <a className="capitalize hover:text-green-600 px-4 border-gray-400">
                why us
              </a>
            </Link>
          </li>
          <li className="capatalize   border-b py-4 border-gray-400">
            <button
              onClick={() => setShowUseMbl(!showUseMbl)}
              className="hover:text-green-600 h-full w-full px-4 flex items-center justify-between capitalize"
            >
              use cases <FaChevronDown className="mr-4" />
            </button>
            {/*Mobile Use case dropdown */}
            <ul
              className={`${
                showUseMbl ? "h-80 sm:h-72 py-2" : "h-0"
              } transition-all duration-500 overflow-hidden flex flex-col text-[18px] `}
            >
              <li className="p-[20px] hover:bg-[#C4F0004D] rounded-md flex items-center gap-4">
                <Image
                  src={"/images/submenu-icon.svg"}
                  height={32}
                  width={32}
                  alt="img"
                />{" "}
                Asynchronous interview from SMB to Entreprise
              </li>
              <li className="p-[20px] hover:bg-[#C4F0004D] rounded-md flex items-center gap-4">
                <Image
                  src={"/images/submenu-icon-2.svg"}
                  height={32}
                  width={32}
                  alt="img"
                />{" "}
                Model Management Company
              </li>
              <li className="p-[20px] hover:bg-[#C4F0004D] rounded-md flex items-center gap-4">
                <Image
                  src={"/images/submenu-icon-3.svg"}
                  height={32}
                  width={32}
                  alt="img"
                />{" "}
                Founder Pitch Pool
              </li>
              <li className="p-[20px] hover:bg-[#C4F0004D] rounded-md flex items-center gap-4">
                {" "}
                <Image
                  src={"/images/submenu-icon-4.svg"}
                  height={32}
                  width={32}
                  alt="img"
                />{" "}
                School Admission interview
              </li>
            </ul>
          </li>
          <li className="capitalize  border-b py-4 border-gray-400  ">
            <Link href={"/"}>
              <a className="capitalize px-4 hover:text-green-600">pricing</a>
            </Link>
          </li>
          <li className="capitalize  border-b py-4 border-gray-400  ">
            <Link href={"/"}>
              <a className="capitalize px-4 hover:text-green-600">Sign In</a>
            </Link>
          </li>
          <li className="capitalize  py-4  ">
            <Link href={"/"}>
              <a className="capitalize px-4 hover:text-green-600">
                Try Lucy Free
              </a>
            </Link>
          </li>
        </ul>
        {/* Mobile header links -- end */}
      </div>
      {/* Mobile navigation -- end */}
      {/* Hamburger button -- start */}
      <div className="md:hidden">
        <button
          onClick={() => setShowNavMbl(!showNavMbl)}
          className="flex justify-center items-center"
        >
          <Image src={"/images/bars.svg"} alt={"bars"} width={36} height={36} />
        </button>
      </div>
      {/* Hamburger button -- end */}
    </header>
  );
};

export default Header;
