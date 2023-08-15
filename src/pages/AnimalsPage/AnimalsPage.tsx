import { useEffect, useState } from "react";
import AnimalsPageStyled from "./AnimalsPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadAnimalsActionCreator,
  loadMoreAnimalsActionCreator,
} from "../../store/animals/animalsSlice";
import AnimalsList from "../../components/AnimalsList/AnimalsList";
import useAnimals from "../../hooks/animals/useAnimals";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { paths } from "../../utils/paths/paths";
import LoadMore from "../../components/LoadMore/LoadMore";

const AnimalsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getAnimals } = useAnimals();
  const { isLogged } = useAppSelector((state) => state.user);
  const { animals, limit } = useAppSelector((state) => state.animals);
  const navigate = useNavigate();
  const [skip] = useState(0);
  const [totalAnimals, setTotalAnimals] = useState(0);
  const chargedAnimals = useAppSelector((state) => state.animals.animals);

  const areChargedAnimals = chargedAnimals.length === 0;

  const loadMoreOnClick = () => {
    dispatch(loadMoreAnimalsActionCreator());
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
  }, [dispatch, getAnimals, limit, skip]);

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
          <img
            src="/images/icons/add-icon.svg"
            alt="add animal icon"
            width={32}
            height={32}
          />
        </Button>
      )}
      {areChargedAnimals && (
        <div className="animals-container__feedback">
          <img
            src="images/feedback/warning-icon.svg"
            alt="alert icon"
            width={56}
            height={55}
            loading="lazy"
          />
          <span>
            No animals found in this page in adoption right now, try another
            filter or try it later.
          </span>
        </div>
      )}
      <AnimalsList />
      {animals.length !== totalAnimals && (
        <LoadMore
          totalAnimals={totalAnimals}
          limit={limit}
          loadMoreOnClick={loadMoreOnClick}
        />
      )}
    </AnimalsPageStyled>
  );
};

export default AnimalsPage;
