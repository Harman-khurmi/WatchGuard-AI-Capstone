import React from 'react'
import logo from "../assets/watchguard.svg"
import { navItems, footerItems, dawdleInfo } from '../constants' // Make sure these are properly defined
import arrowLink from "../assets/LinkArrow.svg"
import Linkedin from '../assets/socialMedia/linkedLogo.svg'
import Instagram from '../assets/socialMedia/instagram.svg'
import Twitter from '../assets/socialMedia/twitter.svg'

const Footer = () => {
  return (
    <footer className='mt-28  bg-bgWhite py-10 md:py-16 lg:py-20'>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Logo and social icons for small and medium screens */}
          <div className="flex flex-col items-center lg:items-start">
            <img className='h-12 md:h-16 lg:h-20  my-6 justify-center items-center content-center' src={logo} alt="logo" />
            <div className='lg:hidden flex gap-4'>
              <SocialIcon src={Linkedin} alt="LinkedIn" />
              <SocialIcon src={Instagram} alt="Instagram" />
              <SocialIcon src={Twitter} alt="Twitter" />
            </div>
          </div>

          {/* Links */}
          <div className='grid md:grid-cols-2 gap-8'>
          
            <ul className='flex flex-col  md:items-center lg:gap-1 '>
              <h3 className='font-bold py-2 text-lg'>Policies</h3>
              {footerItems?.map((item, index) => (
                <FooterLink key={index} {...item} />
              ))}
            </ul>
            <ul className='flex flex-col  md:items-center lg:gap-1 '>
              <h3 className='font-bold py-2 text-lg'>Connect Us</h3>
              {dawdleInfo?.map((item, index) => (
                <FooterLink key={index} {...item} />
              ))}
            </ul>
          </div>

          {/* Social icons for large screens */}
          <div className='hidden lg:flex justify-center items-center gap-4'>
            <SocialIcon src={Linkedin} alt="LinkedIn" link={"#"} />
            <SocialIcon src={Instagram} alt="Instagram" link={"#"} />
            <SocialIcon src={Twitter} alt="Twitter" link={"#"} />
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ href, label }) => (
  <li className='mb-3 items-center'>
    <a href={href} target="_blank" className="flex gap-1 items-center">
      {label}
      <img src={arrowLink} alt="Arrow" className="w-4 h-4" />
    </a>
  </li>
)

const SocialIcon = ({ src, alt, link }) => (
  <a href={link} target="_blank">
    <img className="h-10 w-10 lg:h-14 lg:w-14 rounded-lg bg-white p-2" src={src} alt={alt} />
  </a>
)

export default Footer;
