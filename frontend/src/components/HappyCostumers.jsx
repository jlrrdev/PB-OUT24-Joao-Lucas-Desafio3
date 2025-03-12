import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  // Testimonials data
  const testimonialsData = [
    {
      name: "Mary T.",
      text: `"Shopping for clothes that match my personal style used to be difficult, but Shop.co changed that. Their wide selection caters to different tastes and occasions, making fashion more accessible than ever.”`,
    },
    {
      name: "Sarah M.",
      text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    },
    {
      name: "Alex K.",
      text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    },
    {
      name: "James L.",
      text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    },
    {
      name: "Mooen J.",
      text: `"I'm absolutely impressed by the quality and elegance of the clothes I ordered from Shop.co. Whether it's everyday outfits or sophisticated attire, every piece has exceeded my expectations.”`,
    },
  ];

  // Infinite loop effect
  useEffect(() => {
    const carousel = carouselRef.current;
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Add copies of the cards on start and end
    const carouselChildren = [...carousel.children];
    carouselChildren
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    carouselChildren
      .slice(0, cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
      });

    // Setup initial scroll
    carousel.scrollLeft = carousel.offsetWidth;
  }, []);

  // Arrow navigation
  const handleArrowClick = (direction) => {
    const carousel = carouselRef.current;
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    carousel.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
  };

  // Grab function
  const dragStart = (e) => {
    setIsDragging(true);
    carouselRef.current.classList.add("dragging");
    setStartX(e.pageX);
    setStartScrollLeft(carouselRef.current.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    setIsDragging(false);
    carouselRef.current.classList.remove("dragging");
  };

  // Auto Play
  const autoPlay = () => {
    if (window.innerWidth < 800) return;
    const id = setTimeout(() => {
      const carousel = carouselRef.current;
      const firstCardWidth = carousel.querySelector(".card").offsetWidth;
      carousel.scrollLeft += firstCardWidth;
    }, 2500);
    setTimeoutId(id);
  };

  // infinite scroll
  const infiniteScroll = () => {
    const carousel = carouselRef.current;
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    } else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if (!testimonialsRef.current.matches(":hover")) autoPlay();
  };

  // Add events
  useEffect(() => {
    const carousel = carouselRef.current;
    const testimonials = testimonialsRef.current;

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    testimonials.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    testimonials.addEventListener("mouseleave", autoPlay);

    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("scroll", infiniteScroll);
      testimonials.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      testimonials.removeEventListener("mouseleave", autoPlay);
    };
  }, [isDragging, startX, startScrollLeft, timeoutId]);

  return (
    <section className="testimonials" ref={testimonialsRef}>
      <div className="wrapper">
        <div className="headingbtns">
          <h2 className="darkheader">OUR HAPPY CUSTOMERS</h2>
          <div className="leftright">
            <svg
              className="arrows left"
              onClick={() => handleArrowClick("left")}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.70406 4.4541L2.95406 11.2041C2.84918 11.3086 2.76597 11.4328 2.70919 11.5696C2.6524 11.7063 2.62317 11.8529 2.62317 12.001C2.62317 12.149 2.6524 12.2957 2.70919 12.4324C2.76597 12.5691 2.84918 12.6933 2.95406 12.7979L9.70406 19.5479C9.91541 19.7592 10.2021 19.8779 10.5009 19.8779C10.7998 19.8779 11.0865 19.7592 11.2978 19.5479C11.5092 19.3365 11.6279 19.0499 11.6279 18.751C11.6279 18.4521 11.5092 18.1654 11.2978 17.9541L6.46875 13.125L20.25 13.125C20.5484 13.125 20.8345 13.0065 21.0455 12.7955C21.2565 12.5846 20.5484 12.2984 20.25 12C20.25 11.7017 21.2565 11.4155 21.0455 11.2045C20.8345 10.9936 20.5484 10.875 20.25 10.875L6.46875 10.875L11.2987 6.04598C11.5101 5.83463 11.6288 5.54799 11.6288 5.2491C11.6288 4.95022 11.5101 4.66357 11.2987 4.45223C11.0874 4.24088 10.8008 4.12215 10.5019 4.12215C10.203 4.12215 9.91634 4.24088 9.705 4.45223L9.70406 4.4541Z"
                fill="black"
              />
            </svg>
            <svg
              className="arrows right"
              onClick={() => handleArrowClick("right")}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2959 4.4541L21.0459 11.2041C21.1508 11.3086 21.234 11.4328 21.2908 11.5696C21.3476 11.7063 21.3768 11.8529 21.3768 12.001C21.3768 12.149 21.3476 12.2957 21.2908 12.4324C21.234 12.5691 21.1508 12.6933 21.0459 12.7979L14.2959 19.5479C14.0846 19.7592 13.7979 19.8779 13.4991 19.8779C13.2002 19.8779 12.9135 19.7592 12.7022 19.5479C12.4908 19.3365 12.3721 19.0499 12.3721 18.751C12.3721 18.4521 12.4908 18.1654 12.7022 17.9541L17.5313 13.125L3.75 13.125C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.95451 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875L17.5313 10.875L12.7013 6.04598C12.4899 5.83463 12.3712 5.54799 12.3712 5.2491C12.3712 4.95022 12.4899 4.66357 12.7013 4.45223C12.9126 4.24088 13.1992 4.12215 13.4981 4.12215C13.797 4.12215 14.0837 4.24088 14.295 4.45223L14.2959 4.4541Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <ul className="carousel" ref={carouselRef}>
          {testimonialsData.map((testimonial, index) => (
            <li className="card" key={index}>
              <div className="cardcontent">
                <div className="img">
                  <svg
                    width="139"
                    height="23"
                    viewBox="0 0 139 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                    <path
                      d="M40.3553 0L43.5537 6.8872L51.0922 7.80085L45.5305 12.971L46.9911 20.4229L40.3553 16.731L33.7195 20.4229L35.1801 12.971L29.6183 7.80085L37.1568 6.8872L40.3553 0Z"
                      fill="#FFC633"
                    />
                    <path
                      d="M69.421 0L72.6195 6.8872L80.158 7.80085L74.5962 12.971L76.0568 20.4229L69.421 16.731L62.7852 20.4229L64.2458 12.971L58.6841 7.80085L66.2226 6.8872L69.421 0Z"
                      fill="#FFC633"
                    />
                    <path
                      d="M98.4868 0L101.685 6.8872L109.224 7.80085L103.662 12.971L105.123 20.4229L98.4868 16.731L91.851 20.4229L93.3116 12.971L87.7498 7.80085L95.2883 6.8872L98.4868 0Z"
                      fill="#FFC633"
                    />
                    <path
                      d="M127.553 0L130.751 6.8872L138.289 7.80085L132.728 12.971L134.188 20.4229L127.553 16.731L120.917 20.4229L122.377 12.971L116.816 7.80085L124.354 6.8872L127.553 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div className="namecheck">
                  <h3>{testimonial.name}</h3>
                  <svg
                    className="greencheck"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0.829102C8.07164 0.829102 6.18657 1.40093 4.58319 2.47227C2.97982 3.54362 1.73013 5.06636 0.992179 6.84794C0.254225 8.62952 0.061142 10.5899 0.437348 12.4812C0.813554 14.3725 1.74215 16.1098 3.10571 17.4734C4.46928 18.837 6.20656 19.7656 8.09787 20.1418C9.98919 20.518 11.9496 20.3249 13.7312 19.5869C15.5127 18.849 17.0355 17.5993 18.1068 15.9959C19.1782 14.3925 19.75 12.5075 19.75 10.5791C19.7473 7.99408 18.7192 5.51571 16.8913 3.68783C15.0634 1.85994 12.585 0.831831 10 0.829102ZM14.2806 8.85973L9.03063 14.1097C8.96097 14.1795 8.87826 14.2348 8.78721 14.2725C8.69616 14.3103 8.59857 14.3297 8.5 14.3297C8.40144 14.3297 8.30385 14.3103 8.2128 14.2725C8.12175 14.2348 8.03903 14.1795 7.96938 14.1097L5.71938 11.8597C5.57865 11.719 5.49959 11.5281 5.49959 11.3291C5.49959 11.1301 5.57865 10.9392 5.71938 10.7985C5.86011 10.6577 6.05098 10.5787 6.25 10.5787C6.44903 10.5787 6.6399 10.6577 6.78063 10.7985L8.5 12.5188L13.2194 7.79848C13.2891 7.72879 13.3718 7.67352 13.4628 7.63581C13.5539 7.59809 13.6515 7.57868 13.75 7.57868C13.8486 7.57868 13.9461 7.59809 14.0372 7.63581C14.1282 7.67352 14.2109 7.72879 14.2806 7.79848C14.3503 7.86816 14.4056 7.95088 14.4433 8.04193C14.481 8.13297 14.5004 8.23056 14.5004 8.3291C14.5004 8.42765 14.481 8.52523 14.4433 8.61627C14.4056 8.70732 14.3503 8.79004 14.2806 8.85973Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p>{testimonial.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;