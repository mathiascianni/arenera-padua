import HamburguerButton from "./HamburguerButton";
import { navbarlinks } from "../../api/navbar";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import WhatsappButton from "./WhatsappButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setIsShow(true);
    } else {
      if (!isOpen) setIsShow(false);
    }
    setLastScrollY(window.scrollY);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; 
    }

    if (!isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, lastScrollY]);

  return (
    <nav
      className={`bg-primary text-white fixed w-full xl:w-[calc(100%-162px-162px)] left-1/2 -translate-x-1/2 p-4 xl:p-5 xl:rounded-md z-20 transition-all duration-500 ${
        isShow ? "top-0 xl:top-[16px]" : "-top-[150px]"
      }`}
    >
      <div className="hidden lg:flex justify-between items-center">
        <NavLink to="/">
          <img src="/media/arenera-padua-logo-full.png" alt="" />
        </NavLink>
        <ul className="flex gap-4 font-light">
          {navbarlinks.map((link) => (
            <li key={link.name}>
              <NavLink
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-secondary after:w-full after:scale-x-0 after:-bottom-1 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left"
                to={link.link}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex lg:hidden justify-between items-center">
        <NavLink to="/">
          <img src="/media/arenera-padua-logo-min.png" alt="" className="max-w-[42px]" />
        </NavLink>
        <HamburguerButton isOpen={isOpen} handleOpen={handleOpen} />
        <div
          className={`absolute w-full h-screen top-0 bg-primary flex flex-col justify-center items-center gap-4 transition-all duration-500 ${
            isOpen ? "right-0" : "-right-full"
          }`}
        >
          <ul>
            {navbarlinks.map((link) => (
              <li key={link.name} className="text-3xl mb-6">
                <NavLink
                  to={link.link}
                  className="font-light"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
