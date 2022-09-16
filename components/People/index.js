/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const People = () => {
  // Data array for the slider
  let data = [
    {
      id: 1,
      name: "Dru Dalton",
      img: "/images/people_1.webp",
      words:
        "“We're able to hire larger workforces with less manual intervention, which means lower overhead costs and a better experience for my employees.”",
      post: "CEO",
    },
    {
      id: 2,
      name: "Karla Deras",
      img: "/images/people_2.webp",
      words:
        "“LUCY has improved our hiring process from the get-go. We can now free up time to focus on the things that matter, the people.”",
      post: "Recruiter",
    },
    {
      id: 3,
      name: "Jorge Diaz Largo",
      img: "/images/people_3.webp",
      words:
        "“We have a professional careers page that I can share with everyone. LUCY has solved our hiring problems and we couldn’t be happier with it.”",
      post: "CEO",
    },
  ];
  const [peoples] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let lastIndex = peoples.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, peoples]);
  useEffect(() => {
    // let slider = setInterval(() => {
    //   setIndex(index + 1);
    // }, 5000);
    // return () => {
    //   clearInterval(slider);
    // };
  }, [index]);
  return (
    <>
      <div className="section-center h-[65vh] sm:h-[75vh] md:h-[60vh] lg:h-[60vh] overflow-hidden font-Poppins sm:mx-10 md:mx-[72px] md:mt-[174px]  lg:mx-0  lg:mt-10">
        <h1 className="font-semibold text-start px-10 sm:px-12 lg:pl-[310px] xl:pl-[400px] lg:mt-16 text-[28px] mt-10 md:mt-0 leadding-[42px] lg:text-[40px] ">
          People sweet words
        </h1>
        {peoples.map((people, peopleIndex) => {
          const { id, img, name, words, post } = people;
          let position = "nextSlide";
          if (peopleIndex === index) {
            position = "activeSlide";
          }
          if (
            peopleIndex === index - 1 ||
            (index === 0 && peopleIndex === peoples.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article
              className={`article absolute right-11 mt-5 sm:mt-10 md:mt-0 left-9 sm:right-14 sm:left-14 md:left-10  top-1/4 md:top-20  ${position}  flex flex-col  lg:flex-row items-start lg:items-center shadow-lg rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[30px] z-30 lg:w-3/4 `}
              key={id}
            >
              <div className="flex items-center">
                <img
                  className="image h-[100px] w-[100px] lg:h-[300px] lg:w-[300px] object-cover  rounded-bl-[30px] rounded-t-[120px] z-20 mr-8 lg:mr-14"
                  src={img}
                  alt={name}
                />
                <div className=" text-start lg:hidden">
                  <p className="text-[#19191966]  font-semibold text-[24px] leading-[36px]">
                    {post}
                  </p>
                  <h4 className="text-[rgba(25, 25, 25, 0.4)] font-semibold italic text-[18px] leading-[27px]">
                    {name}
                  </h4>
                </div>
              </div>
              <div className="text-start  py-11 px-6 lg:px-10  ">
                <p className="font-medium text-[20px] lg:text-[20px] leading-[30px] ">
                  {words}
                </p>
              </div>
              <div className="absolute right-10 bottom-4 text-start hidden lg:flex flex-col">
                <p className=" text-[#19191966] font-semibold">{post}</p>
                <h4 className="font-semibold italic">{name}</h4>
              </div>
            </article>
          );
        })}
        <div className="hidden xl:block absolute  -left-16 -bottom-5">
          <Image
            src="/images/slider-black-img.svg"
            width={300}
            height={300}
            alt="black image"
          />
        </div>
        {/* Arrow button */}
        <button
          onClick={() => setIndex(index + 1)}
          className="absolute top-72 md:top-36 z-30 right-4 lg:right-36 cursor-pointer  bg-black text-white rounded-full p-3"
        >
          <HiOutlineArrowNarrowRight className="text-xl md:text-3xl font-bold"></HiOutlineArrowNarrowRight>
        </button>
      </div>
      <div className="mb-20 mt-10 sm:mt-16 md:mt-20  flex bottom-4 justify-center items-center gap-4">
        <button
          onClick={() => setIndex(0)}
          className={`${
            index === 0
              ? "w-6 h-3 md:w-8 md:h-4   bg-black "
              : "w-3 h-3 md:w-4 md:h-4 bg-[#D9D9D9] rounded-full"
          } rounded-full `}
        ></button>
        <button
          onClick={() => setIndex(1)}
          className={`${
            index === 1
              ? "w-6 h-3 md:w-8 md:h-4 bg-black "
              : "w-3 h-3 md:w-4 md:h-4 bg-[#D9D9D9] rounded-full"
          } rounded-full `}
        ></button>
        <button
          onClick={() => setIndex(2)}
          className={`${
            index === 2
              ? "w-6 h-3 md:w-8 md:h-4 bg-black "
              : "w-3 h-3 md:w-4 md:h-4 bg-[#D9D9D9] rounded-full"
          } rounded-full `}
        ></button>
      </div>
    </>
  );
};

export default People;
