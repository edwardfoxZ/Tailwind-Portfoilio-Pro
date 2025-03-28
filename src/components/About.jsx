import React from "react";
import notebook from "../assets/notebookM.png";
import mobile from "../assets/mobileR.png";

export const About = () => {
  return (
    <div
      className="text-white gap-4 max-w-[1200px] mx-auto my-12 grid sm:grid-cols-3"
      id="about"
    >
      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4">
        <div className="max-w-[80%] mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            I can optimize your website
          </h2>
          <p className="text-gray-200">
            lorem ipsum aekjhafjkehafekjafhejkaehakej lorem ipsum
            aekjhafjkehafekjafhejkaehakej lorem ipsum
            aekjhafjkehafekjafhejkaehakej{" "}
          </p>
        </div>
      </div>

      <div className="hidden md:block sm:col-span-1 glass overflow-hidden">
        <img className="w-[200px] md:w-[500px] absolute" src={notebook} />
      </div>

      <div className="hidden md:block sm:col-span-1 glass overflow-hidden">
        <img className="w-[200px] md:w-[500px] absolute" src={mobile} />
      </div>

      <div className="md:hidden relative overflow-hidden h-[200px] glass">
        <img className="absolute w-[400px]" src={notebook} />
        <img className="w-[200px] right-0 absolute" src={mobile} />
      </div>

      <div className="sm:col-span-2 glass sm:py-16 my-auto text-left p-4">
        <div className="max-w-[80%] mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            I can optimize your website
          </h2>
          <p className="text-gray-200">
            lorem ipsum aekjhafjkehafekjafhejkaehakej lorem ipsum
            aekjhafjkehafekjafhejkaehakej lorem ipsum
            aekjhafjkehafekjafhejkaehakej{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

