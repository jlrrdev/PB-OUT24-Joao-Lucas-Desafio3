import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (

    <section className="footersection">
      <footer>
        <div className="wrapper">
          <div className="links-container">
            <div className="firstcolumn">
              <h3 className="first-column-title">SHOP.CO</h3>
              <p>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="social">
                <a href="#" target="_blank">
                  <img
                    src={assets.twitter_logo}
                    alt="Twitter logo"
                    draggable="false"
                  />
                </a>

                <a href="#" target="_blank">
                  <img
                    src={assets.facebook_logo}
                    alt="Facebook logo"
                    draggable="false"
                  />
                </a>

                <a href="#" target="_blank">
                  <img
                    src={assets.instagram_logo}
                    alt="Instagram logo"
                    draggable="false"
                  />
                </a>

                <a href="https://github.com/Ruivo0210" target="_blank">
                  <img
                    src={assets.github_logo}
                    alt="Github logo"
                    draggable="false"
                  />
                </a>
              </div>
            </div>

            <div className="footer-links-container">
              <div className="top-links-container">
                <div className="links">
                  <h3>COMPANY</h3>

                  <ul>
                    <li><a href="#" target="_blank">About</a></li>
                    <li><a href="#" target="_blank">Features</a></li>
                    <li><a href="#" target="_blank">Works</a></li>
                    <li><a href="#" target="_blank">Career</a></li>
                  </ul>
                </div>

                <div className="links">
                  <h3>FAQ</h3>

                  <ul>
                    <li><a href="#" target="_blank">Account</a></li>
                    <li><a href="#" target="_blank">Manage Deliveries</a></li>
                    <li><a href="#" target="_blank">Orders</a></li>
                    <li><a href="#" target="_blank">Payments</a></li>
                  </ul>
                </div>
              </div>

              <div className="bottom-links-container">
                <div className="links">
                  <h3>HELP</h3>

                  <ul>
                    <li><a href="#" target="_blank">Customer Support</a></li>
                    <li><a href="#" target="_blank">Delivery Details</a></li>
                    <li><a href="#" target="_blank">Terms & Conditions</a></li>
                    <li><a href="#" target="_blank">Privacy Policy</a></li>
                  </ul>
                </div>

                <div className="links">
                  <h3>RESOURCES</h3>

                  <ul>
                    <li><a href="#" target="_blank">Free eBooks</a></li>
                    <li>
                      <a href="#" target="_blank">Development Tutorial</a>
                    </li>
                    <li><a href="#" target="_blank">How to - Blog</a></li>
                    <li><a href="#" target="_blank">Youtube Playlist</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="copyright">
            <p>Shop.co © 2000-2025, All Rights Reserved.</p>

            <div className="cardslogo">
              <img
                src={assets.visa_logo_footer}
                alt="Visa card logo"
                draggable="false"
              />
              <img
                src={assets.mastercard_logo_footer}
                alt="Mastercard logo"
                draggable="false"
              />
              <img
                src={assets.paypal_logo_footer}
                alt="Paypal logo"
                draggable="false"
              />
              <img
                src={assets.apple_logo_footer}
                alt="ApplePay logo"
                draggable="false"
              />
              <img
                src={assets.gpay_logo_footer}
                alt="GooglePay logo"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
    
  )
}

export default Footer
