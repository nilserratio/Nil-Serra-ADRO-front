import { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import ScrollToTopStyled from "./ScrollToTopStyled";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ScrollToTopStyled style={{ display: visible ? "" : "none" }}>
      <BiArrowToTop
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        aria-label="scroll to top button"
      />
    </ScrollToTopStyled>
  );
};

export default ScrollToTop;
