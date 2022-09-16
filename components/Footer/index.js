import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa";
const Footer = () => {
  const languages = [
    { id: 1, name: "English" },
    { id: 2, name: "Chinese" },
  ];
  // Selected value stored in selected state
  const [selected, setSelected] = useState(languages[0]);
  return (
    <footer>
      <div className="overflow-hidden relative w-full flex justify-center items-center bg-[#191919] text-white  font-Poppins ">
        <div className="gradient absolute right-0 top-0 bottom-0 w-80 h-full transform rotate-45 rounded-full"></div>
        <div className="gradient3 absolute bottom-0 right-0 w-[605.93px] h-[300.16px] rounded-full"></div>
        <div className="gradient5 absolute -bottom-10 -left-40 w-[905.93px] h-[200.16px] rounded-full"></div>
        <div className="text-center py-28 px-1 md:px-0 ">
          <h1 className="text-3xl md:text-4xl font-semibold mb-10">
            Get started with Lucy
          </h1>
          <p className="mb-10">
            Sort out the stress of managing recruitment and give candidates{" "}
            <br /> and coworkers a better hiring experience.
          </p>
          <button className="btn-white w-[160px] h-[48px] font-bold text-sm tracking-normal leading-[21px]">
            Try Lucy Free
          </button>
        </div>
      </div>
      <div className="px-8 md:px-12 lg:px-32 pt-20 bg-[rgba(0,0,0,.86)] w-full text-white font-Poppins">
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
            {/* Footer links -- start */}
            <Link href={"/"}>
              <a className="anchor-hover ">Sign In</a>
            </Link>
            <Link href={"/"}>
              <a className="anchor-hover">Service</a>
            </Link>
            <Link href={"/"}>
              <a className="anchor-hover">Plan</a>
            </Link>
            <Link href={"/"}>
              <a className="anchor-hover">Lucy Community</a>
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
          <div className="flex flex-col gap-5 col-span-2 sm:col-span-1">
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
            {/* Footer links -- end */}
          </div>
          <div className="mb-6 flex gap-6 lg:grid  items-center col-span-2 md:col-span-3 lg:col-auto">
            {/* Language dropdown -- start  */}
            <div>
              <Listbox value={selected} onChange={setSelected}>
                <Listbox.Label className="text-sm text-[#FFFFFF]">
                  Language
                </Listbox.Label>
                <div className="relative mt-1">
                  <Listbox.Button className="text-black cursor-pointer relative w-[153px] h-[48px] p-[10px] rounded-[5px]  bg-white text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm text-[14px]">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <FaChevronDown className="h-4 w-9 text-[#A3A3A3]" />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute rounded-[5px] w-[153px] py-4  bg-white text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {languages.map((language, languageIdx) => (
                        <Listbox.Option
                          key={languageIdx}
                          className={({ active }) =>
                            `relative group cursor-default select-none  py-[10px] px-[21px] text-sm  w-[153px] h-[40px] ${
                              active
                                ? "bg-[#A3A3A3]  text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={language}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate group-hover:font-semibold ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {language.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#A3A3A3]"></span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            {/* Language dropdown -- end  */}

            {/* Social links -- start */}
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
            {/* Social links -- end */}
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
