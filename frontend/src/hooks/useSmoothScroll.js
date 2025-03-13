import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    // Select all the links that starts with #
    const anchors = document.querySelectorAll('a[href^="#"]');

    // Add the click event to each link
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Smooth scroll
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    // Clean the event listeners
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);
};

export default useSmoothScroll;