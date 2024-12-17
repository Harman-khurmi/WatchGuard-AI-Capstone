import React from 'react'
import { motion } from "framer-motion";

const ConsultantMarquee = () => {

  const upperMarquee = [
    "/Consultants/1.png",
    "/Consultants/2.png",
    "/Consultants/3.png",
    "/Consultants/4.png",
    "/Consultants/5.png",
    "/Consultants/6.png",
    "/Consultants/7.png",
    "/Consultants/8.png",
    "/Consultants/9.png",
    "/Consultants/10.png",
    "/Consultants/11.png",
    "/Consultants/12.png",
    "/Consultants/13.png",
    "/Consultants/14.png",
  ];

  return (
    <div className="container mx-auto mt-10 w-full relative items-center justify-center overflow-x-hidden">
      {/* top  */}
      <div className="bg-brandPrimary w-full flex MyGradient xs:h-20 h-24  md:h-32 lg:h-36">

        {/* First Marquee */}
        <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0">
          {upperMarquee.map((image, index) => (
            <div key={index} className='flex flex-col justify-center items-center mx-6 gap-5 content-center'>
              <div className='bg-bgWhite rounded-lg h-16 w-16 xs:h-12 xs:w-12 md:h-20 md:w-20 lg:h-24 lg:w-24 mx-2 my-3 md:my-1 lg:my-1  justify-center items-center'>
                <img className='h-16 w-16 md:h-20 md:w-20 xs:h-12 xs:w-12 lg:h-24 lg:w-24  bg-center bg-contain p-1' src={image} alt={`marquee-${index}`} />
              </div>

            </div>
          ))}
        </motion.div>

        {/* Second Marquee */}
        <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0">
          {upperMarquee.map((image, index) => (
            <div key={index + upperMarquee.length} className='flex flex-col justify-center items-center mx-6 gap-5 content-center'>
              <div className='bg-bgWhite rounded-lg h-16 w-16 xs:h-12 xs:w-12 md:h-20 md:w-20 lg:h-24 lg:w-24 mx-2 my-3 md:my-1 lg:my-1  justify-center items-center'>
                <img className='h-16 w-16 md:h-20 md:w-20 xs:h-12 xs:w-12 lg:h-24 lg:w-24  bg-center bg-contain p-1' src={image} alt={`marquee-${index}`} />
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* bottom */}
      <div className="bg-brandPrimary w-full flex MyGradient xs:h-20 h-24  md:h-32 lg:h-36">

        {/* First Marquee */}
        <motion.div initial={{ x: '-100%' }} animate={{ x: '0' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0">
          {upperMarquee.map((image, index) => (
            <div key={index} className='flex flex-col justify-center items-center mx-6 gap-5 content-center'>
              <div className='bg-bgWhite rounded-lg h-16 w-16 xs:h-12 xs:w-12 md:h-20 md:w-20 lg:h-24 lg:w-24 mx-2 my-3 md:my-1 lg:my-1  justify-center items-center'>
                <img className='h-16 w-16 md:h-20 md:w-20 xs:h-12 xs:w-12 lg:h-24 lg:w-24  bg-center bg-contain p-1' src={image} alt={`marquee-${index}`} />
              </div>

            </div>
          ))}
        </motion.div>

        {/* Second Marquee */}
        <motion.div initial={{ x: '-100%' }} animate={{ x: '0' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0">
          {upperMarquee.map((image, index) => (
            <div key={index + upperMarquee.length} className='flex flex-col justify-center items-center mx-6 gap-5 content-center'>
              <div className='bg-bgWhite rounded-lg h-16 w-16 xs:h-12 xs:w-12 md:h-20 md:w-20 lg:h-24 lg:w-24 mx-2 my-3 md:my-1 lg:my-1  justify-center items-center'>
                <img className='h-16 w-16 md:h-20 md:w-20 xs:h-12 xs:w-12 lg:h-24 lg:w-24  bg-center bg-contain p-1' src={image} alt={`marquee-${index}`} />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default ConsultantMarquee;
