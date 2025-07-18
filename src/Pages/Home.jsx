import React from 'react'
import AboutSection from '../Components/AboutSection'
import WhyChoose from '../Components/WhyChoose'
import TestimonialsSection from '../Components/TestimonialsSection'
import ShivTradersHero from '../Components/ShivTradersHero'
import ShivTradersFeatures from '../Components/ShivTradersFeatures'

const Home = () => {
  return (
    <div>
      <ShivTradersHero/>
      <AboutSection/>
      <WhyChoose/>
      <ShivTradersFeatures/>
    </div>
  )
}

export default Home
