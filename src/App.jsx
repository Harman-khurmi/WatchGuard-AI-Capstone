import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurMission from './components/OurMission'
import ContributeRepo from './components/ContributeRepo'
import InsightsLogo from './components/InsightsLogo'
import JoinUs from './components/JoinUs'
import ConnectUs from './components/ConnectUs'
import TrustedBy from './components/TrustedBy'
import Footer from './components/Footer'
import JumpTop from './components/JumpTop'


const App = () => {
  return (
    <>
      <div id="targetComponentHero" className='relative'>
        <Navbar />
        {/* <JumpTop /> */}
        <div className="div max-w-256 mx-auto pt-8  px-6 overflow-x-hidden">
          <Hero />
          <OurMission />
          <ContributeRepo />
        </div>
        {/* <InsightsLogo /> */}
        <JoinUs />
        <div className="max-w-256 mx-auto px-6 overflow-x-hidden">
          {/* <ConnectUs /> */}
          {/* <TrustedBy /> */}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App