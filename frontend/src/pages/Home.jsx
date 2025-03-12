import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/bestseller'
import Brands from '../components/Brands'

// CSS

import '../styles/homepage/brands.css'; 
import '../styles/homepage/testimonials.css'; 
import '../styles/homepage/clothes.css'; 
import '../styles/homepage/hero.css'; 
import '../styles/homepage/newsletter.css'; 
import '../styles/homepage/stylegrid.css'; 

const Home = () => {
  return (
    <div>
      <Hero/>
      <Brands/>
      <LatestCollection/>
      <BestSeller/>
    </div>
  )
}

export default Home
