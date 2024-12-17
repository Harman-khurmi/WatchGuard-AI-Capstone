import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import bulbImage from '../assets/bulbImage.svg'
import compassImage from '../assets/compassImage.svg'
const ContributeRepo = () => {
  return (
    <>
      <div id="targetComponent" className="container pt-36  relative mx-auto">
        <div className=' flex flex-col gap-4 lg:gap-3 md:gap-3 w-full justify-center items-center content-center text-center py-4 h-auto '>

          <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-brandSecondary lg:leading-[72px] md:leading-[52px] '>
            {/* heading */}
            Why choose <span className='text-brandPrimary'>WatchGuard AI</span></h1>


          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:min-h-48 lg:min-h-36 gap-20 pt-20'>
            {/* Left Card */}
            <div className='bg-bgWhite md:w-72 xs:w-72 w-80 lg:w-128 lg:h-48 lg:pt-10 h-40 rounded-2xl flex flex-col p-6 gap-4 lg:gap-4 items-start justify-center text-left relative'>
              <div className='text-lg lg:text-xl xl:text-3xl font-bold xs:w-full flex flex-col  relative  '>
                <span className='px-1 lg:pt-1 lg:px-2  text-white bg-brandSecondary rounded-lg w-fit '>Real-Time Anomaly</span>
                <span className='px-1 lg:pb-1 lg:px-2  text-white bg-brandSecondary rounded-lg w-fit '>Detection</span>
              </div>

              {/* {sub heading} */}
              <div className='h-10 font-medium text-sm'>
                <h3 className=''>Our system instantly identifies unusual activities or behaviors, allowing for immediate response and prevention.</h3>
              </div>

              <div className='absolute flex top-[-3rem] right-1 text-brandSecondary h-24 w-24 lg:top-[-4rem] lg:left-96 lg:h-32 lg:w-32 md:top-[-3rem] md:left-[13rem]'>
                <img src={bulbImage} alt="" />
              </div>
            </div>
            {/* Right Card */}
            <div className='bg-bgWhite md:w-72 xs:w-72 w-80 lg:w-128 lg:h-48 lg:pt-4 h-40 rounded-2xl flex flex-col p-4  gap-4 lg:gap-4 justify-center text-left relative'>
              <div className='text-lg lg:text-xl xl:text-3xl font-bold md:w-[80%] relative flex flex-col'>
                <span className='px-1 lg:px-2 lg:pt-1 text-white bg-brandSecondary rounded-lg w-fit '>Seamless Integration</span>

              </div>
              {/* {sub heading} */}
              <div className='h-10 font-medium text-sm pr-12'>
                <h3 className=''>WatchGuard AI connects with your existing camera infrastructure. No need for new hardware-just smarter surveillance.</h3>
              </div>

              <div className='absolute flex top-[-3rem] right-4 lg:top-[-4rem] lg:right-6 lg:h-32 lg:w-32 text-brandSecondary h-24 w-24 md:top-[-3rem] md:right-2 '>
                <img src={compassImage} alt="" />
              </div>
            </div>
            {/* Left Card */}
            <div className='bg-bgWhite md:w-72 xs:w-72 w-80 lg:w-128 lg:h-48 lg:pt-4 h-40 rounded-2xl flex flex-col p-4 gap-4 lg:gap-4 items-start justify-center text-left relative'>
              <div className='text-lg lg:text-xl xl:text-3xl font-bold xs:w-full flex flex-col  relative  '>
                <span className='px-1 lg:pt-1 lg:px-2  text-white bg-brandSecondary rounded-lg w-fit '>Versatile Applications </span>

              </div>

              {/* {sub heading} */}
              <div className='h-10 font-medium text-sm pr-12'>
                <h3 className=''>Whether on a university campus, in a bustling city center, or a private property, our system adapts to your environment, offering precise and actionable insights.</h3>
              </div>


              <div className='absolute flex top-[-3rem] right-1 text-brandSecondary h-24 w-24 lg:top-[-4rem] lg:left-96 lg:h-32 lg:w-32 md:top-[-3rem] md:left-[13rem]'>
                <img src={bulbImage} alt="" />
              </div>
            </div>
            {/* Right Card */}
            <div className='bg-bgWhite md:w-72 xs:w-72 w-80 lg:w-128 lg:h-48 lg:pt-4 h-40 rounded-2xl flex flex-col p-4  gap-4 lg:gap-4 justify-center text-left relative'>
              <div className='text-lg lg:text-xl xl:text-3xl font-bold md:w-[80%] relative flex flex-col'>
                <span className='px-1 lg:px-2 lg:pt-1 text-white bg-brandSecondary rounded-lg w-fit '>Privacy-Focused</span>

              </div>
              {/* {sub heading} */}
              <div className='h-10 font-medium text-sm pr-16'>
                <h3 className=''>We prioritize data privacy, ensuring that all footage is securely processed and stored, adhering to global standards of compliance.</h3>
              </div>

              <div className='absolute flex top-[-3rem] right-4 lg:top-[-4rem] lg:right-6 lg:h-32 lg:w-32 text-brandSecondary h-24 w-24 md:top-[-3rem] md:right-2 '>
                <img src={compassImage} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ContributeRepo