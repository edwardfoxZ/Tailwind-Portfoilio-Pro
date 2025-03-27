import React from "react";
import profilepic from "../assets/profilepic.png";
import notebookL from "../assets/notebookL.png";
import notebookM from "../assets/notebookM.png";
import mobileR from "../assets/mobileR.png";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <div
      className="relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 overflow-hidden md:overflow-visible"
      id="hero"
    >
      <img
        draggable={false}
        src={notebookL}
        alt="notebookL"
        className="hidden md:block absolute z-[-1] w-[400px] bottom-0 left-[-170px]"
      />
      <img
        draggable={false}
        src={notebookM}
        alt="notebookM"
        className="absolute z-[-1] w-[400px] -bottom-[190px] md:bottom-0 md:left-[320px]"
      />
      <img
        draggable={false}
        src={mobileR}
        alt="mobileR"
        className="absolute z-[-1] w-[200px] bottom-[600px] left-[450px]"
      />

      <div className="absolute right-0 bottom-[15px] w-full mx-auto">
        <div className="flex flex-row justify-end items-center">
          <div className="w-1/2 glass p-8 text-white my-5 z-20 backdrop-blur-sm space-y-16">
            <h1>
              <p className="text-xl md:text-6xl font-bold">I&apos;m</p>
              <TypeAnimation
                className="text-xl md:text-6xl font-semibold"
                sequence={[
                  "Frontend Dev",
                  1000,
                  "Webdesigner",
                  1000,
                  "Consultant",
                  1000,
                ]}
              />
            </h1>
            <p className="text-sm md:text-xl">
              My name is Harald Hardrada and I have 5+ years experience in web
              development.
            </p>
          </div>

          <img
            draggable={false}
            src={profilepic}
            alt="profilepic"
            className="w-[300px] md:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};
