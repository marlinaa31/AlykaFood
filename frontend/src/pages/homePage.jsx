import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Category from '../components/category'
import About from '../components/about'
import PopularRestaurants from '../components/popularRestaurants'
import PromoBanner from '../components/promoBanner'
import Features from '../components/features'
import Testimonials from '../components/testimoni'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularRestaurants/>
      {/* <Category /> */}
      <About/>
      {/* <PromoBanner/> */}
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default HomePage