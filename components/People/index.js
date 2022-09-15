/* eslint-disable @next/next/no-img-element */
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
    <div className="section-center h-[60vh] md:h-[20vh] lg:h-[50vh]  flex justify-center items-center md:mx-[72px] md:mt-[174px] md:mb-[169px] lg:mx-0 lg:mb-0 lg:mt-0">
      <div className="absolute top-10 left-10 md:top-0 md:left-40 lg:left-64 xl:left-96  xl:top-10">
        <h1 className="font-semibold  text-3xl md:text-[40px] ">
          People sweet words
        </h1>
      </div>
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
            className={`article absolute  left-4 md:left-10 right-10 top-1/4 md:top-10  ${position}  flex flex-col  lg:flex-row items-start lg:items-center font-Poppins shadow-lg rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[30px] `}
            key={id}
          >
            <div className="flex items-center">
              <img
                className="image h-[100px] w-[100px] lg:h-[300px] lg:w-[300px] object-cover  rounded-bl-[30px] rounded-t-[120px] mr-8 lg:mr-14"
                src={img}
                alt={name}
              />
              <div className=" text-start lg:hidden">
                <p className=" text-gray-400 font-semibold">{post}</p>
                <h4 className="font-semibold italic">{name}</h4>
              </div>
            </div>
            <div className="text-start  py-10 px-4 lg:px-10  ">
              <p className="font-medium text-sm lg:text-[20px] leading-[30px] ">
                {words}
              </p>
            </div>
            <div className="absolute right-10 bottom-4 text-start hidden lg:flex flex-col">
              <p className=" text-gray-400 font-semibold">{post}</p>
              <h4 className="font-semibold italic">{name}</h4>
            </div>
          </article>
        );
      })}
      {/* Arrow button */}
      <button
        onClick={() => setIndex(index + 1)}
        className="absolute top-60 md:top-28  right-4  bg-black text-white rounded-full p-3"
      >
        <HiOutlineArrowNarrowRight className="text-xl md:text-3xl font-bold"></HiOutlineArrowNarrowRight>
      </button>
    </div>
  );
};

export default People;
