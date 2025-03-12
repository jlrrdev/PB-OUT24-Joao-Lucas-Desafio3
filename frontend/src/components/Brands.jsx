import React from 'react'
import { assets } from '../assets/assets'

const Brands = () => {
  return (

    <section className="brand-section" id="brand">
      <div className="brand-container">
        <div className="versace">
          <a href="#"
            ><img
              src={assets.versace}
              alt="Versace Logo"
              draggable="false"
            />
          </a>
        </div>

        <div className="zara">
          <a href="#"
            ><img
              src={assets.zara}
              alt="Zara Logo"
              draggable="false"
            />
          </a>
        </div>

        <div className="gucci">
          <a href="#"
            ><img
              src={assets.gucci}
              alt="Gucci Logo"
              draggable="false"
            />
          </a>
        </div>

        <div className="prada">
          <a href="#"
            ><img
              src={assets.prada}
              alt="Prada Logo"
              draggable="false"
            />
          </a>
        </div>

        <div className="calvin">
          <a href="#"
            ><img
              src={assets.calvin}
              alt="Calvin Klein Logo"
              draggable="false"
            />
          </a>
        </div>
      </div>
    </section>
    
  )
}

export default Brands
