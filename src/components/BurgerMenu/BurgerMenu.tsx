import BurgerMenuStyled from "./BurgerMenuStyled";

const BurgerMenu = (): React.ReactElement => {
  return (
    <BurgerMenuStyled>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
    </BurgerMenuStyled>
  );
};

export default BurgerMenu;
