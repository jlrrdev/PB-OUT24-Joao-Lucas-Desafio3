import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Brands from '../components/Brands'

// CSS

import '../styles/homepage/hero.css'; 
import '../styles/homepage/brands.css'; 
import '../styles/homepage/clothes.css'; 
import '../styles/homepage/stylegrid.css'; 
import '../styles/homepage/testimonials.css'; 
import '../styles/homepage/newsletter.css'; 
import StyleGrid from '../components/StyleGrid'
import HappyCostumers from '../components/HappyCostumers'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Brands/>
      <LatestCollection/>
      <BestSeller/>
      <StyleGrid/>
      <HappyCostumers/>
    </div>
  )
}

export default Home
