import React from 'react'
import { Menu, X } from "lucide-react"
import { useState } from 'react'
import logo from "../assets/watchguard.svg"
import { navItems } from '../constants'
import arrowLink from "../assets/LinkArrow.svg"
const Navbar = () => {
  const [mobileSideOpen, setMobileSideOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileSideOpen(!mobileSideOpen);
  }
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-300 mx-auto'>
      <div className="container lg:px-28 md:px-10 px-6 mx-auto relative text-lg font-medium">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className='py-2 max-sm:h-10 h-20' src={logo} alt="logo" />
          </div>
          {/* <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index, arrow) => (
              <li key={index} className='flex items-center gap-2'>
                <a href={item.href} target="_blank">{item.label}</a>
                <span className=''><img src={arrowLink} alt="" /></span>
              </li>
            ))}
          </ul> */}
          <div className="lg:hidden md-flex flex-col justify-end">
            <button className='text-brandSecondary' onClick={toggleNavbar}>
              {mobileSideOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {
          mobileSideOpen && (
            <div className="fixed right-0 z-20 bg-bgWhite w-full p-10 mt-3 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index, arrow) => (
                  <li key={index} className='flex items-center gap-2 py-2'>
                    <a href={item.href} target="_blank">{item.label}</a>
                    <span className=''><img src={arrowLink} alt="" /></span>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar