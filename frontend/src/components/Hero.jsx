import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border'>

      {/* Hero Left Side */}

      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-[#F2F0F1]">
        <div className="text-[#000000]">
            <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed integral-cf'>
                FIND CLOTHES <br/>
                THAT MATCHES <br/>
                YOUR STYLE
            </h1>
            <p className='text-sm md:text-base text-[#00000099]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        </div>
      </div>

      {/* Hero Right Side */}

        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />

    </div>
  )
}

export default Hero
