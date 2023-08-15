import HeroStyled from "./HeroStyled";

const Hero = (): React.ReactElement => {
  return (
    <HeroStyled className="hero-container">
      <img
        className="hero-container__image"
        src="images/hero-375.webp"
        alt="A galgo dog looking up"
        width={375}
        height={621}
      />
      <div className="hero-container__information">
        <h2>Adopt, save a life</h2>
        <p>
          Until you have loved an animal, a part of your soul will remain
          asleep...
        </p>
        <span>Anatole France</span>
      </div>
    </HeroStyled>
  );
};

export default Hero;
