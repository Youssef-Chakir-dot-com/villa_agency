"use client";

import React, { useEffect, useState } from "react";

import { villas } from "../../utils/infos";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
function Slider() {
  const [activeSlider, setActiveSlider] = useState(0);
  const clickNext = () => {
    activeSlider == villas.length - 1
      ? setActiveSlider(0)
      : setActiveSlider(activeSlider + 1);
  };

  const clickPrev = () => {
    activeSlider == 0
      ? setActiveSlider(villas.length - 1)
      : setActiveSlider(activeSlider - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeSlider]);

  return (
    <div className="mt-6 ">
      <div className="mx-1">
        {villas.map((villa, idx) => (
          <div
            key={idx}
            style={{
              backgroundImage: `url(${villa.src})`,
              width: "1345px",
              height: "800px",
            }}
            className={`${
              idx == activeSlider
                ? "transition-all ease-in-out duration-1000 relative bg-no-repeat bg-cover bg-center px-[20%] pt-[220px] pb-[320px] h-full mt-0"
                : "hidden"
            }`}
          >
            <motion.div
              initial={{
                opacity: idx == activeSlider ? 0 : 0.5,
                scale: idx == activeSlider ? 0.5 : 0.3,
              }}
              animate={{
                opacity: idx == activeSlider ? 1 : 0.5,
                scale: idx == activeSlider ? 1 : 0.3,
              }}
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
              }}
            >
              <div className="absolute ">
                <div className="bg-white px-2 w-[175px]">
                  <span className="text-black font-medium text-[16px]  ">
                    {villa.city},
                  </span>
                  <span className="text-primary"> {villa.country}</span>
                </div>
                <div className="mt-3 leading-[72px] w-[400px] mb-0 uppercase text-white text-[62px] font-bold">
                  {villa.desc}
                </div>
              </div>
            </motion.div>
            <div className="absolute top-[60%] right-[5%] bg-light-green bg-opacity-70 w-14 h-14 rounded-full flex justify-center items-center">
              <button className="cursor-pointer" onClick={clickNext}>
                <FontAwesomeIcon
                  icon={faGreaterThan}
                  className="text-white text-2xl"
                />
              </button>
            </div>

            <div className="absolute top-[60%] left-[5%] bg-light-green bg-opacity-70 w-14 h-14 rounded-full flex justify-center items-center">
              <button className="cursor-pointer" onClick={clickPrev}>
                <FontAwesomeIcon
                  className="text-white text-2xl"
                  icon={faLessThan}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
