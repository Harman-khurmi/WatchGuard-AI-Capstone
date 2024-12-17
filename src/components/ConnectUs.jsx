import React from 'react'
import connectLG from "../assets/connectImage-lg.svg"
import connectSM from "../assets/connectImage-sm.svg"
import Buttons from './Buttons'
const ConnectUs = () => {
  return (
    <>
      <div className="container mt-40 h-fit pt-12 rounded-3xl relative mx-auto  bg-bgWhite justify-center items-center">
        <div className=' flex flex-col gap-4 lg:gap-3 md:gap-3 w-full justify-center items-center content-center text-center py-4 h-auto '>
          {/* heading */}
          <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-brandSecondary lg:leading-[72px] md:leading-[52px] '>
            Connect <span className='text-brandPrimary'>with Us</span></h1>
          {/* subheading */}
          <h3 className='text-lg font-medium text-brandSecondary px-8 md:px-16 lg:px-20'>If your company has developed a product or service designed to solve specific business challenges, we'd love to hear from you. Let us help you connect with the businesses that need your solution most.</h3>
          {/* button */}
          <div>
            <Buttons
              Data={{
                Title: "Connect with us",
                height: 'h-16',
                width: 'w-56',
                large: 'w-72',
                Link: "https://cal.com/dawdle-clients/exploratory"
              }
              }
            />
          </div>
          <div className='h-fit mt-6 px-12' >
            <img className=' hidden lg:flex md:flex mt-18' src={connectLG} />
            <img className=' sm:hidden h-96' src={connectSM} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ConnectUs
