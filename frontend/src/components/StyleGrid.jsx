import React from 'react'
import { assets } from '../assets/assets'

const StyleGrid = () => {
  return (

    <section class="stylegridsection">
      <div class="wrapper">
        <div class="style">
          <h2 class="darkheader">BROWSE BY DRESS STYLE</h2>

          <div class="stylegrid">
            <div class="styleimg" id="casual">
              <a href="#">
                <div class="stylecontent">
                  <div class="stylecontent-text">
                    <p>Casual</p>
                  </div>
                  <div class="stylecontent-img">
                    <img
                      src={assets.casual}
                      alt="Casual style"
                      draggable="false"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div class="styleimg" id="formal">
              <a href="#">
                <div class="stylecontent">
                  <div class="stylecontent-text">
                    <p>Formal</p>
                  </div>
                  <div class="stylecontent-img">
                    <img
                      src={assets.formal}
                      alt="Formal style"
                      draggable="false"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div class="styleimg" id="party">
              <a href="#">
                <div class="stylecontent">
                  <div class="stylecontent-text">
                    <p>Party</p>
                  </div>
                  <div class="stylecontent-img">
                    <img
                      src={assets.party}
                      alt="Party style"
                      draggable="false"
                    />
                  </div>
                </div>
              </a>
            </div>

            <div class="styleimg" id="gym">
              <a href="#">
                <div class="stylecontent">
                  <div class="stylecontent-text">
                    <p>Gym</p>
                  </div>
                  <div class="stylecontent-img">
                    <img
                      src={assets.gym}
                      alt="Gym style"
                      draggable="false"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default StyleGrid
