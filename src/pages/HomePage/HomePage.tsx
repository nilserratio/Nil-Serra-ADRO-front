import Hero from "../../components/Hero/Hero";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled className="home-container">
      <Hero />
      <h1 className="home-container__tittle">HomePage</h1>
    </HomePageStyled>
  );
};

export default HomePage;
