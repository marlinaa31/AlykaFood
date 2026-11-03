import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Category from '../components/category'
import PopularRestaurants from '../components/popularRestaurants'
import PromoBanner from '../components/promoBanner'
import Features from '../components/features'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <PopularRestaurants/>
      <PromoBanner/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default HomePage