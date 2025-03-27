import React, { useState } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NavLinks = [
  {
    name: "Home",
    to: "home",
  },
  {
    name: "About",
    to: "about",
  },
  {
    name: "Portfolio",
    to: "portfolio",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

export const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <div
        className="hidden md:flex max-w-[1300px] flex-row justify-between mx-auto 
                glass-nav p-8 text-white my-5 z-30 backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold">H.Hardrada</h2>
        <ul className="flex gap-10 text-xl">
          {NavLinks.map((link, index) => (
            <li className="relative group" key={index}>
              <Link
                to={link.to}
                smooth={true}
                offset={-100}
                className="cursor-pointer"
              >
                {link.name}
              </Link>
              <span
                className="absolute bottom-0 left-0 w-full bg-[#e127b1] h-1 transform 
                        scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
              ></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute right-5 top-5 md:hidden flex flex-row gap-5 text-white">
        {isToggled ? (
          <RxCross1
            size={30}
            className="text-2xl z-40 cursor-pointer"
            onClick={() => setIsToggled(false)}
          />
        ) : (
          <RxHamburgerMenu
            size={30}
            className="text-2xl z-40 cursor-pointer"
            onClick={() => setIsToggled(true)}
          />
        )}
      </div>

      <div className="md:hidden flex flex-row gap-5 text-white">
        {isToggled && (
          <ul
            className={`fixed inset-0 z-30 bg-[#191616] flex flex-col items-center py-52 gap-10 text-4xl font-bold 
                    md:font-normal md:text-xl`}
          >
            {NavLinks.map((link, index) => (
              <li className="relative group" key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  offset={-100}
                  className="cursor-pointer"
                >
                  {link.name}
                </Link>
                <span
                  className="absolute bottom-0 left-0 w-full bg-[#e127b1] h-1 transform scale-x-0 
                            group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                ></span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
