import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import PopularMenu from '../components/popularMenu'
import Features from '../components/features'
import Testimonials from '../components/testimoni'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularMenu/>
      <About/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default HomePage