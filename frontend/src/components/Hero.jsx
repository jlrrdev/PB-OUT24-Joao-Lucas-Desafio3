import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (

    <section className="header">
      <header>
        <div className="mobile-nowrap wrapper">
          <div className="hero-section">
            <div className="left">
              <div className="herotext">
                <h1>
                  FIND CLOTHES <br />
                  THAT MATCHES <br />
                  YOUR STYLE
                </h1>

                <p>
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
              </div>

              <NavLink to='/collection' className="btn dark">
              
              <p href="#">Shop Now</p>

              </NavLink>

              <div id="acvcrds" className="achievement-cards">
                <div className="maincards">
                  <div className="achievement-card">
                    <h3>200+</h3>
                    <p>International Brands</p>
                  </div>

                  <hr className="achievementhr" />

                  <div className="achievement-card">
                    <h3>2,000+</h3>
                    <p>High-Quality Products</p>
                  </div>
                </div>

                <hr id="hidehr" className="achievementhr" />

                <div id="downcard" className="achievement-card">
                  <h3>30,000+</h3>
                  <p>Happy Costumers</p>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="hero-image">
                <img
                  src={assets.smallstar}
                  className="small star"
                  alt="Small Star"
                  draggable="false"
                />
                <img
                  src={assets.bigstar}
                  className="big star"
                  alt="Big Star"
                  draggable="false"
                />
                <img
                  src={assets.hero_img}
                  id="coupleimg"
                  alt="A couple wearing Shop.co clothes."
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>

  )
}

export default Hero
