import { useEffect } from "react";

const useSmoothScroll = (): void => {
  useEffect(() => {
    // Select all the links that start with #
    const anchors: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href^="#"]');

    // Add the click event to each link
    const handleClick = (e: MouseEvent): void => {
      e.preventDefault();
      const targetId: string | null = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      const targetElement: HTMLElement | null = targetId ? document.querySelector(targetId) : null;

      if (targetElement) {
        // Smooth scroll
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    anchors.forEach((anchor: HTMLAnchorElement) => {
      anchor.addEventListener("click", handleClick);
    });

    // Clean the event listeners
    return () => {
      anchors.forEach((anchor: HTMLAnchorElement) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);
};

export default useSmoothScroll;