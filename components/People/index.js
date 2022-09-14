/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const People = () => {
  // Data array for the slider
  let data = [
    {
      id: 1,
      name: "Dru Dalton",
      img: "/images/people_1.svg",
      words:
        "“We're able to hire larger workforces with less manual intervention, which means lower overhead costs and a better experience for my employees.”",
      post: "CEO",
    },
    {
      id: 2,
      name: "Karla Deras",
      img: "/images/people_2.svg",
      words:
        "“LUCY has improved our hiring process from the get-go. We can now free up time to focus on the things that matter, the people.”",
      post: "Recruiter",
    },
    {
      id: 3,
      name: "Jorge Diaz Largo",
      img: "/images/people_3.svg",
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
    <div className="section-center h-[60vh] md:h-[70vh]  flex justify-center items-center ">
      <div className="absolute top-10 left-10 md:left-52 xl:left-96  xl:top-10">
        <h1 className="font-semibold  text-3xl md:text-4xl ">
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
            className={`article absolute  left-4 md:left-10 right-10 top-1/4 md:top-10  ${position}  flex flex-col  md:flex-row items-start md:items-center font-Poppins shadow-lg`}
            key={id}
          >
            <div className="flex items-center">
              <img
                className="image h-[100px] w-[100px] md:h-[300px] md:w-[300px] object-cover  rounded-t-full mr-8 md:mr-14"
                src={img}
                alt={name}
              />
              <div className=" text-start md:hidden">
                <p className=" text-gray-400 font-semibold">{post}</p>
                <h4 className="font-semibold italic">{name}</h4>
              </div>
            </div>
            <div className="text-start  py-10 px-4 md:px-10  ">
              <p className="font-medium md:font-semibold text-sm md:text-lg ">
                {words}
              </p>
            </div>
            <div className="absolute right-10 bottom-4 text-start hidden md:flex flex-col">
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
