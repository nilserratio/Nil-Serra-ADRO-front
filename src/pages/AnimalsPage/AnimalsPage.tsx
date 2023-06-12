import { useEffect, useState } from "react";
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
  const [skip, setSkip] = useState(0);
  const [totalAnimals, setTotalAnimals] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 6;

  const nextPage = () => {
    setSkip(skip + limit);
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    setSkip(skip - limit);
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    (async () => {
      const animalsList = await getAnimals(skip, limit);
      if (animalsList) {
        const { animals, totalAnimals } = animalsList;

        dispatch(loadAnimalsActionCreator(animals));

        setTotalAnimals(totalAnimals);

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
    })();
  }, [dispatch, getAnimals, skip]);

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
      <Pagination
        className="animals-container__pagination"
        previousOnClick={previousPage}
        nextOnClick={nextPage}
        totalAnimals={totalAnimals}
        limit={limit}
        page={page}
      />
    </AnimalsPageStyled>
  );
};

export default AnimalsPage;
