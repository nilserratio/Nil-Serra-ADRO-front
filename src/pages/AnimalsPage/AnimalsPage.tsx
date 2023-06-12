import { useEffect } from "react";
import AnimalsPageStyled from "./AnimalsPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadAnimalsActionCreator } from "../../store/animals/animalsSlice";
import AnimalsList from "../../components/AnimalsList/AnimalsList";
import useAnimals from "../../hooks/animals/useAnimals";
import Pagination from "../../components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { paths } from "../../utils/paths/paths";

const AnimalsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getAnimals } = useAnimals();
  const { isLogged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const animalsList = await getAnimals();
      if (animalsList) {
        dispatch(loadAnimalsActionCreator(animalsList));

        const firstAnimalImage = animalsList[0].imageUrl;
        const preconnectImage = document.createElement("link");
        preconnectImage.rel = "preload";
        preconnectImage.as = "image";
        preconnectImage.href = firstAnimalImage;

        const parentElement = document.head;
        const firstChild = parentElement.firstChild;
        parentElement.insertBefore(preconnectImage, firstChild);
      }
    })();
  }, [dispatch, getAnimals]);

  return (
    <AnimalsPageStyled className="animals-container">
      <div className="animals-container__tittle">
        <h1 className="animals-container__title">In adoption</h1>
        <span>You can&apos;t buy love, but you can rescue it.</span>
      </div>
      {isLogged && (
        <Button
          text="Add an animal"
          className="animals-container__create"
          actionOnClick={() => navigate(paths.create)}
        >
          <img src="/images/icons/add-icon.svg" alt="add animal icon" />
        </Button>
      )}
      <AnimalsList />
      <Pagination className="animals-container__pagination" />
    </AnimalsPageStyled>
  );
};

export default AnimalsPage;
