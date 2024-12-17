import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import heroImage from '../assets/heroImage2.svg';
import arrowBtn from '../assets/arrowBtn.svg';

const Hero = () => {
  const scrollToComponent = () => {
    const target = document.getElementById('targetComponent');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Target component not found");
    }
  };


  return (
    <>
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2  md:min-h-48 lg:min-h-36 w-full">
          {/* Text section */}
          <div className='mx-auto flex flex-col md:flex-col  justify-center gap-6 text-center md:text-left md:pt-0 leading-10  md:justify-start content-start  lg:items-start md:items-start items-center '>
            {/* Heading */}
            <h1 id="heroHeading" className='lg:text-6xl md:text-5xl text-4xl font-bold text-neutral-800 lg:leading-[72px] md:leading-[56px] xs:text-3xl '>
              Welcome to WatchGuard AI -  <div className='text-[#C71343] leading-16 lg:text-6xl md:text-5xl    text-4xl font-bold xs:text-3xl lg:leading-[72px] md:leading-[56px]'>Vigilance, Reinvented</div>
            </h1>

            <h3 id="heroSubheading" className=' mx-auto flex text-base md:text-lg font-medium text-brandSecondary leading-8'>
              WatchGuard AI delivers real-time anomaly detection by analyzing live footage from any camera, ensuring proactive security and instant alerts. Stay ahead with smarter surveillance.

            </h3>

            {/* Button */}
            <div className='mb-6 h-16 items-center w-full flex justify-center md:justify-start lg:justify-start'>
              <button
                onClick={scrollToComponent}
                className='h-14 w-64 lg:w-72 flex justify-between font-medium bg-[#4195D2] items-center rounded-full pl-4 pr-1 text-bgWhite transition-all duration-300 ease-in-out transform hover:bg-bgWhite hover:text-[#4195D2] hover:shadow-lg hover:scale-105'
              >
                <h3 className='text-md md:text-lg lg:text-xl transition-all duration-100 ease-in-out'>
                  Learn more about it
                </h3>
                <div className='flex rounded-full content-center justify-center items-center text-brandSecondary bg-bgWhite h-12 w-12 transition-all duration-100 ease-in-out '>
                  <img

                    className='flex content-center justify-center items-center transition-transform duration-300 ease-in-out '
                    src={arrowBtn}
                    alt="arrow"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className='flex flex-col justify-center items-center '>
            <img className=' w-132 md:scale-110 object-cover mb-16' src={heroImage} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
