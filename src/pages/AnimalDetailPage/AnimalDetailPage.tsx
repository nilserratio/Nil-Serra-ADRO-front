import useAnimals from "../../hooks/animals/useAnimals";
import AnimalDetailPageStyled from "./AnimalDetailPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { Link, NavLink, useParams } from "react-router-dom";
import { loadSelectedAnimalActionCreator } from "../../store/animals/animalsSlice";
import { AnimalDataStructure } from "../../types";
import { useEffect } from "react";
import { paths } from "../../utils/paths/paths";

const AnimalDetailPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getAnimalById } = useAnimals();
  const { idAnimal } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    (async () => {
      if (idAnimal) {
        const animal = await getAnimalById(idAnimal);

        dispatch(
          loadSelectedAnimalActionCreator(animal as AnimalDataStructure)
        );

        const firstAnimalImage = animal?.imageUrl as string;
        const preconnectImage = document.createElement("link");
        preconnectImage.rel = "preload";
        preconnectImage.as = "image";
        preconnectImage.href = firstAnimalImage;

        const parentElement = document.head;
        const firstChild = parentElement.firstChild;
        parentElement.insertBefore(preconnectImage, firstChild);
      }
    })();
  }, [idAnimal, dispatch, getAnimalById]);

  const animal = useAppSelector((state) => state.animals.animalById);

  return (
    <AnimalDetailPageStyled>
      <img
        className="details-image"
        src={animal?.imageUrl}
        alt={`A ${animal?.species} named ${animal?.name}`}
        height="100%"
        width={370}
      />
      <div className="details-container">
        <h1 className="details-container__tittle">{animal?.name}</h1>
        <div className="details-container__info">
          <span>{animal?.gender}</span>
          <span>{animal?.size}</span>
        </div>
        <span className="details-container__races">{animal?.races}</span>
        <p>{animal?.description}</p>
        <span className="details-container__years">
          Year of birth: {animal?.yearOfBirth}
        </span>
        <Link
          className="details-container__button"
          to="https://adrosona.wixsite.com/adrosona"
        >
          Adopt me!
        </Link>
        <NavLink className="details-container__home" to={paths.home}>
          Back to homepage
        </NavLink>
      </div>
    </AnimalDetailPageStyled>
  );
};

export default AnimalDetailPage;
