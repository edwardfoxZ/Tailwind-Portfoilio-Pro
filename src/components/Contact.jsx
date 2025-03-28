import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto my-6" id="contact">
      <div className="glass p-16 rounded-lg">
        <h1 className="text-center space-y-5 mb-10">
          <p className="text-4xl font-bold text-white/50">Let&apos;s connect</p>
          <p className="text-white text-lg">
            and start working on amazing things
          </p>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center space-y-6">
          <div className="flex flex-row md:flex-col items-center justify-center gap-5">
            <FaLinkedin
              className="text-purple-800"
              size={window.innerWidth < 768 ? 50 : 100}
            />
            <FaGithub
              className="text-purple-800"
              size={window.innerWidth < 768 ? 50 : 100}
            />
            <FaTwitter
              className="text-purple-800"
              size={window.innerWidth < 768 ? 50 : 100}
            />
          </div>

          <div className="max-w-6xl flex flex-col items-start justify-start gap-5">
            <h2 className="text-xl font-bold text-white/70">
              Ready to Get Started?
            </h2>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-800"
              placeholder="Your name..."
            />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-800"
              placeholder="Your email..."
            />
            <textarea
              name="message"
              id="message"
              className="w-full h-40 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-800"
              placeholder="Your message..."
            />
            <div>
              <button className="bg-purple-800 p-3 rounded-lg font-semibold text-stone-50 hover:bg-purple-900 transition-all duration-300">
                Send the message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
