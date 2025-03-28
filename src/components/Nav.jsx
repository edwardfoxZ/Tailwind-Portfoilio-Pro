import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (isToggled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isToggled]);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
          className="hidden md:flex max-w-[1300px] flex-row justify-between mx-auto 
                glass-nav p-8 text-white my-1 z-30 backdrop-blur-sm"
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
      </nav>

      <div className="fixed z-40 right-3 top-3 md:hidden flex flex-row gap-5 text-white bg-[#313131bb] p-2 rounded-full">
        {isToggled ? (
          <RxCross1
            size={30}
            className="text-2xl cursor-pointer"
            onClick={() => setIsToggled(false)}
          />
        ) : (
          <RxHamburgerMenu
            size={30}
            className="text-2xl cursor-pointer"
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
                  onClick={() => setIsToggled(false)}
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
