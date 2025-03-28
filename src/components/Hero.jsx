import React from "react";
import heroImage from "../assets/profilepic.png";
import notebookL from "../assets/notebookL.png";
import notebookM from "../assets/notebookM.png";
import mobileR from "../assets/mobileR.png";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <div
      className="relative mt-20 md:mt-0 grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh]
             mx-auto my-32 overflow-hidden md:overflow-visible"
      id="home"
    >
      <img
        className="hidden md:block absolute z-[-1] w-[400px] bottom-[60px] left-[-170px]"
        src={notebookL}
        alt=""
      />
      <img
        className="absolute md:z-[-1] w-[200px] md:w-[400px] bottom-[-90px]  md:bottom-[80px] md:left-[320px]"
        src={notebookM}
        alt=""
      />
      <img
        className="absolute z-[-1] md:w-[200px] bottom-[500px] left-[450px]"
        src={mobileR}
        alt=""
      />

      <div className="glass px-5 col-span-2 my-auto z-[-1]">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold p-4 md:p-0">
          <p className="md:mb-4 text-gray-500">I´m a</p>
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Webdesigner",
              1000,
              "Consultant",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="font-bold mb-6 md:mb-0 md:my-6 text-sm sm:text-lg lg:text-xl max-w-[280px] p-4 md:p-0 md:max-w-[600px] ml-1 text-gray-300">
          My name is John Doe and I have 5+ years experience in web development.
        </p>
      </div>

      <div className="absolute bottom-0 right-0 w-[250px] lg:w-[600px] z-[-1]">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};
