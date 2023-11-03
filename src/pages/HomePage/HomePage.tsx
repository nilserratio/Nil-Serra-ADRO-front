import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { hideLoaderActionCreator } from "../../store/iu/uiSlice";
import { loadAnimalsActionCreator } from "../../store/animals/animalsSlice";
import useAnimals from "../../hooks/animals/useAnimals";
import Hero from "../../components/Hero/Hero";
import SliderAnimals from "../../components/SliderAnimals/SliderAnimals";
import HomePageStyled from "./HomePageStyled";
import { paths } from "../../utils/paths/paths";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { animals } = useAppSelector((state) => state.animals);
  const { getAnimals } = useAnimals();

  const areChargedAnimals = animals.length === 0;

  useEffect(() => {
    (async () => {
      const animalsList = await getAnimals(0, 50);
      if (animalsList) {
        const { animals } = animalsList;

        dispatch(loadAnimalsActionCreator(animals));

        if (animals.length > 0) {
          const firstAnimalImage = animals[0].imageUrl;
          const preconnectImage = document.createElement("link");
          preconnectImage.rel = "preload";
          preconnectImage.as = "image";
          preconnectImage.href = firstAnimalImage;

          const parentElement = document.head;
          const firstChild = parentElement.firstChild;
          parentElement.insertBefore(preconnectImage, firstChild);
        }
      }

      dispatch(hideLoaderActionCreator());
    })();
  }, [dispatch, getAnimals]);

  return (
    <HomePageStyled className="home-container">
      <Hero />
      <h1 className="home-container__tittle">In adoption</h1>
      <NavLink to={paths.animals} className="home-container__link">
        See full adoption list
      </NavLink>
      {areChargedAnimals && (
        <div className="home-container__feedback">
          <img
            src="images/feedback/warning-icon.svg"
            alt="alert icon"
            width={56}
            height={55}
            loading="lazy"
          />
          <span>No animals found in adoption right now, try it later.</span>
        </div>
      )}
      <SliderAnimals animals={animals} />
    </HomePageStyled>
  );
};

export default HomePage;
