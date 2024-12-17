import React from 'react'
import arrowUp from "../assets/arrowUp.svg"
const JumpTop = () => {

  const scrollToComponent = () => {
    const target = document.getElementById('targetComponentHero');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Target component not found");
    }
  };
  return (
    <>
      <div onClick={scrollToComponent} className='sticky flex justify-end z-50 top-100 lg:top-132 mr-10 lg:mr-16 hover:cursor-pointer'>
        <div className='flex bg-brandPrimary rounded-full lg:h-12 lg:w-12 md:h-10 md:w-10 h-8 w-8 '>
          <img className='text-bgWhite' src={arrowUp} alt="" />
        </div>
      </div>
    </>
  )
}

export default JumpTop