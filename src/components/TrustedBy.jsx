import React from 'react'
import TrustedMarquee from './TrustedMarquee'

const TrustedBy = () => {
  return (
    <>
      <div className="container mt-40 pt-12 rounded-3xl mb-10  relative mx-auto  justify-center items-center">
        <div className=' flex flex-col gap-20 w-full justify-center items-center content-center text-center py-4 h-auto '>
          {/* heading */}
          <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-brandSecondary lg:leading-[72px] md:leading-[52px] '>
            Trusted by <span className='text-brandPrimary'>50+ Companies</span></h1>
          {/* Companies logo */}
          <TrustedMarquee />
        </div>

      </div>
    </>
  )
}

export default TrustedBy