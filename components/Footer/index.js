import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="w-full flex justify-center items-center bg-[#191919] text-white  font-Poppins ">
        <div className="text-center py-28">
          <h1 className="text-4xl font-semibold mb-10">
            Get started with Lucy
          </h1>
          <p className="mb-10">
            Sort out the stress of managing recruitment and give candidates{" "}
            <br /> and coworkers a better hiring experience.
          </p>
          <button className="btn-white">Try Lucy Free</button>
        </div>
      </div>
      <div className="px-8 md:px-12 lg:px-32 pt-20 bg-gray-900 w-full text-white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-5 lg:gap-6 border-b border-solid border-white pb-10">
          <div className="flex justify-between col-span-2 md:col-span-3 lg:col-auto items-center w-28 h-8 ">
            <Image
              src={"/images/icon.svg"}
              alt={"icon"}
              width={28}
              height={37}
            />
            <Image
              src={"/images/icon-2.svg"}
              alt={"icon"}
              width={75}
              height={15}
            />
          </div>
          <div className="flex flex-col  gap-5">
            <h1 className="font-bold text-xl">Lucy</h1>
            <Link href={"/"}>
              <a className="hover:text-green ">Sign In</a>
            </Link>
            <Link href={"/"}>
              <a className="hover:text-green">Service</a>
            </Link>
            <Link href={"/"}>
              <a className="hover:text-green">Plan</a>
            </Link>
            <Link href={"/"}>
              <a className="hover:text-green">Lucy Community</a>
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl">Company</h1>
            <Link href={"/"}>
              <a className="anchor-hover">Contact Lucy</a>
            </Link>
            <Link href={"/"}>
              <a className="anchor-hover">About Lucy</a>
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl">Info</h1>
            <Link href={"/"}>
              <a className="anchor-hover">User Licenses</a>
            </Link>
            <Link href={"/"}>
              <a className="anchor-hover">Privacy Policy</a>
            </Link>
            <Link href={"/"}>
              <a className="anchor-hover">Candidate Licenses</a>
            </Link>
          </div>
          <div className="mb-6 flex gap-6 lg:grid  items-center col-span-2 md:col-span-3 lg:col-auto">
            {/* Dropdown */}
            <div>
              <label
                for="language"
                class="block mb-2 text-md font-semibold text-white "
              >
                Language
              </label>
              <select
                id="language"
                class="bg-gray-50 border border-gray-300 text-gray-900 font-semibold text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-36 p-2.5"
              >
                <option className="text-[#686868]" selected value="English">
                  English
                </option>
                <option className="text-[#686868] h-20" value="Chinese">
                  Chinese
                </option>
              </select>
            </div>
            <div className="flex gap-6 text-3xl self-end lg:self-start">
              <a href="">
                <FaFacebookSquare />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center py-8">
          Copyright © 2022 Norby Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
