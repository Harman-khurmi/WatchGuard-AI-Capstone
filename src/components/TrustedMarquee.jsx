import React from 'react'
import { motion } from "framer-motion";

const TrustedMarquee = () => {

  const upperMarquee = [
    "/Trusted/1.png",
    "/Trusted/2.png",
    "/Trusted/3.png",
    "/Trusted/4.png",
    "/Trusted/5.png",
    "/Trusted/6.png",
    "/Trusted/7.png",
    "/Trusted/8.png",
    "/Trusted/9.png",
    "/Trusted/10.png",
    "/Trusted/11.png",
    "/Trusted/12.png",
    "/Trusted/13.png",
    "/Trusted/14.png",
    "/Trusted/15.jpeg",
    "/Trusted/16.png"
  ];

  return (
    <div className="container w-full mx-auto ">

      {/* top marquee */}
      <div className="w-full flex MyGradient gap-16">

        {/* First marquee */}
        <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0 gap-20">
          {upperMarquee.map((image, index) => (
            <div key={index} className='border border-solid border-slate-300 rounded-lg h-16 md:h-20 bg-cover  justify-center items-center content-center'>
              <img className=' w-full h-full bg-center bg-cover p-2' src={image} alt={`company-logo-${index}`} />
            </div>
          ))}
        </motion.div>

        {/* Second marquee */}
        <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0 gap-20">
          {upperMarquee.map((image, index) => (
            <div key={index + upperMarquee.length} className='border border-solid border-slate-300 rounded-lg h-16 md:h-20 bg-cover  justify-center items-center content-center'>
              <img className=' w-full h-full bg-center bg-cover p-2' src={image} alt={`company-logo-${index}`} />
            </div>
          ))}
        </motion.div>

      </div>

    </div>
  )
}

export default TrustedMarquee;
