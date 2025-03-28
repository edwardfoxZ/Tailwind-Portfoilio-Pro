import React from "react";
import work1 from "../assets/proj1.png";
import work2 from "../assets/proj2.png";
import work3 from "../assets/proj3.png";
import work4 from "../assets/proj4.png";
import work5 from "../assets/proj5.png";
import work6 from "../assets/proj6.png";

export const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-12" id="portfolio">
      <div className="glass p-10 rounded-lg">
        <h1 className="text-4xl font-bold text-start text-white my-8 mb-20">
          My Work
        </h1>
        <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-5">
          <div
            className="relative w-[400px] md:w-[550px] h-[250px] rounded-xl 
                shadow-lg overflow-hidden cursor-pointer"
          >
            <img src={work1} className="w-full h-full object-cover" alt="" />
            <div
              className="bg-black/50 absolute top-0 left-0 w-full h-full opacity-0 
                    hover:opacity-100 transition-opacity duration-300"
            >
              <h1
                className="text-white text-xl md:text-3xl font-bold absolute 
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                Project1
              </h1>
              <a
                className="bg-white p-4 rounded-xl font-bold absolute bottom-8 
                    left-1/2 -translate-x-1/2 hover:bg-black hover:text-white transition-all duration-300"
              >
                Live
              </a>
            </div>
          </div>
          <div
            className="relative w-[400px] md:w-[550px] h-[250px] rounded-xl shadow-lg 
                  overflow-hidden cursor-pointer"
          >
            <img src={work2} className="w-full h-full object-cover" alt="" />
            <div
              className="bg-black/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 
                    transition-opacity duration-300"
            >
              <h1
                className="text-white text-xl md:text-3xl font-bold absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
              >
                Project2
              </h1>
              <a
                className="bg-white p-4 rounded-xl font-bold absolute bottom-8 left-1/2 
                    -translate-x-1/2 hover:bg-black hover:text-white transition-all duration-300"
              >
                Live
              </a>
            </div>
          </div>
          <div
            className="relative w-[400px] md:w-[550px] h-[250px] rounded-xl shadow-lg overflow-hidden 
                cursor-pointer"
          >
            <img src={work3} className="w-full h-full object-cover" alt="" />
            <div
              className="bg-black/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 
                  transition-opacity duration-300"
            >
              <h1
                className="text-white text-xl md:text-3xl font-bold absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
              >
                Project3
              </h1>
              <a
                className="bg-white p-4 rounded-xl font-bold absolute bottom-8 left-1/2 -translate-x-1/2 
                      hover:bg-black hover:text-white transition-all duration-300"
              >
                Live
              </a>
            </div>
          </div>
          <div
            className="relative w-[400px] md:w-[550px] h-[250px] rounded-xl shadow-lg overflow-hidden 
                cursor-pointer"
          >
            <img src={work4} className="w-full h-full object-cover" alt="" />
            <div
              className="bg-black/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100
                      transition-opacity duration-300"
            >
              <h1
                className="text-white text-xl md:text-3xl font-bold absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
              >
                Project4
              </h1>
              <a
                className="bg-white p-4 rounded-xl font-bold absolute bottom-8 left-1/2 
                    -translate-x-1/2 hover:bg-black hover:text-white transition-all duration-300"
              >
                Live
              </a>
            </div>
          </div>
          <div
            className="relative w-[400px] md:w-[550px] h-[250px] rounded-xl shadow-lg overflow-hidden 
                  cursor-pointer"
          >
            <img src={work5} className="w-full h-full object-cover" alt="" />
            <div
              className="bg-black/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 
                  transition-opacity duration-300"
            >
              <h1
                className="text-white text-xl md:text-3xl font-bold absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
              >
                Project5
              </h1>
              <a
                className="bg-white p-4 rounded-xl font-bold absolute bottom-8 left-1/2 
                    -translate-x-1/2 hover:bg-black hover:text-white transition-all duration-300"
              >
                Live
              </a>
            </div>
          </div>
          <div
            className="relative w-[400px] md:w-[550px] h-[250px] rounded-xl shadow-lg overflow-hidden 
                  cursor-pointer"
          >
            <img src={work6} className="w-full h-full object-cover" alt="" />
            <div
              className="bg-black/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 
                    transition-opacity duration-300"
            >
              <h1
                className="text-white text-xl md:text-3xl font-bold absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
              >
                Project6
              </h1>
              <a
                className="bg-white p-4 rounded-xl font-bold absolute bottom-8 left-1/2 
                    -translate-x-1/2 hover:bg-black hover:text-white transition-all duration-300"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
