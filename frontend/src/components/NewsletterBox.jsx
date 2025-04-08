import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
<<<<<<< HEAD
    setEmail('');
=======
    setEmail(''); 
>>>>>>> 87d3a7b8c04205918d0489e1242036aecbb1f05d

    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      showMessage('Enter a valid email address.', 'error');
      return;
    }

    showMessage('Email registered successfully.', 'success');
  };

  const handleMessageClick = () => {
    setMessage('');
    setMessageType('');
  };

  return (
    <section className="newsletter-section" id="newslettersection">
      <div id="news" className="newsletter">
        <div className="wrapper">
          <form onSubmit={handleSubmit} noValidate>
            <p className="darkheader">
              STAY UPTO DATE ABOUT <br className="br" />
              OUR LATEST OFFERS
            </p>
            <div className="submit-container">
              <div className="email-container">
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM11 7.97375L4.89219 2.375H17.1078L11 7.97375ZM7.69906 8L3.125 12.1925V3.8075L7.69906 8ZM9.36406 9.52625L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L12.6359 9.52625L17.1078 13.625H4.89219L9.36406 9.52625ZM14.3009 8L18.875 3.8075V12.1925L14.3009 8Z"
                    fill="black"
                    fillOpacity="0.4"
                  />
                </svg>
                {message && (
                  <div
                    className={`message ${messageType}`}
                    onClick={handleMessageClick}
                  >
                    {message}
                  </div>
                )}
                <input
                  type="email"
                  spellCheck="false"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
<<<<<<< HEAD
                  className={message ? 'hide-placeholder' : ''} 
=======
                  className={message ? 'hide-placeholder' : ''}
>>>>>>> 87d3a7b8c04205918d0489e1242036aecbb1f05d
                />
              </div>
              <button className="btn light">Subscribe to Newsletter</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
