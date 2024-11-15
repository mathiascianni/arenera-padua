import HamburguerButton from "./HamburguerButton"
import { navbarlinks } from "../../api/navbar"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-white fixed w-full xl:w-[calc(100%-162px-162px)] xl:top-[16px] left-1/2 -translate-x-1/2 p-4 xl:p-5 xl:rounded-md">
      <div className="hidden lg:flex justify-between items-center">
        <NavLink to="/"><img src="/media/arenera-padua-logo-full.png" alt="" /></NavLink>
        <ul className="flex gap-4 font-light">
          {navbarlinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.link}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex lg:hidden justify-between items-center">
        <NavLink to="/"><img src="/media/arenera-padua-logo-min.png" alt="" className="max-w-[42px]" /></NavLink>
        <HamburguerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`absolute w-full h-screen top-0 bg-primary flex flex-col justify-center items-center gap-4 transition-all duration-500 ${isOpen ? "right-0" : "-right-full"}`}>
          <ul>
            {
              navbarlinks.map((link) => (
                <li key={link.name} className="text-3xl mb-6">
                  <NavLink to={link.link} className="font-light" onClick={() => setIsOpen(false)}>{link.name}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar