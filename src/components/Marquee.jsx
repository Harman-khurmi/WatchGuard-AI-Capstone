import React from 'react'
import { motion } from "framer-motion";

const Marquee = () => {
  const upperMarquee = [
    "country/c1.svg",
    "country/c2.svg",
    "country/c3.svg",
    "country/c4.svg",
    "country/c5.svg",
    "country/c6.svg",
    "country/c1.svg",
    "country/c2.svg",
    "country/c3.svg",
    "country/c4.svg",
    "country/c5.svg",
    "country/c6.svg",
  ];

  const lowerMarquee = [
    "/insights/1.svg",
    "/insights/2.svg",
    "/insights/3.svg",
    "/insights/4.svg",
    "/insights/5.svg",
    "/insights/6.svg",
    "/insights/7.svg",
    "/insights/8.svg",
    "/insights/9.svg",
    "/insights/10.svg",
    "/insights/11.svg",
    "/insights/12.svg",
  ];

  return (
    <>
      <div className="container w-full mx-auto ">
        {/* top marquee */}
        <div className=" bg-bgWhite w-full flex MyGradient ">
          <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0">
            {upperMarquee.map((image, index) => (
              <div key={`upper1-${index}`} className=''>
                <img className='border border-solid border-x-zinc-200 m-2 rounded-lg h-16 w-24 md:h-20 md:w-32 lg:h-28 lg:w-40 lg:p-6 p-3  md:mx-2 lg:mx-4' src={image} alt={`Upper marquee image ${index + 1}`} />
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0">
            {upperMarquee.map((image, index) => (
              <div key={`upper2-${index}`} className=' '>
                <img className='border border-solid border-x-zinc-200 m-2 rounded-lg h-16 w-24 md:h-20 md:w-32 lg:h-28 lg:w-40 lg:p-6 p-3  md:mx-2 lg:mx-4' src={image} alt={`Upper marquee image ${index + 1}`} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom marquee */}
        <div className=" bg-bgWhite w-full flex  MyGradient">
          <motion.div initial={{ x: '-100%' }} animate={{ x: '0' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0">
            {lowerMarquee.map((image, index) => (
              <div key={`lower1-${index}`} className='bg-bgWhite  bg-cover'>
                <img className='border border-solid border-x-zinc-200 m-2 rounded-xl h-16 w-24 md:h-20 md:w-32 lg:h-28 lg:w-40 lg:p-6 p-3  md:mx-2 lg:mx-4' src={image} alt={`Lower marquee image ${index + 1}`} />
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ x: '-100%' }} animate={{ x: '0' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0">
            {lowerMarquee.map((image, index) => (
              <div key={`lower2-${index}`} className='bg-bgWhite  bg-cover'>
                <img className='border border-solid border-x-zinc-200 m-2 rounded-xl h-16 w-24 md:h-20 md:w-32 lg:h-28 lg:w-40 lg:p-6 p-3  md:mx-2 lg:mx-4' src={image} alt={`Lower marquee image ${index + 1}`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Marquee