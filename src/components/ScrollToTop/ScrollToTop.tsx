import { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import ScrollToTopStyled from "./ScrollToTopStyled";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 900);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ScrollToTopStyled
      className={`srcollToTop ${
        visible ? "srcollToTop--visible" : "srcollToTop--invisible"
      }`}
      aria-label="scroll to top button"
      onClick={scrollToTop}
    >
      <BiArrowToTop />
    </ScrollToTopStyled>
  );
};

export default ScrollToTop;
