import useAnimals from "../../hooks/animals/useAnimals";
import AnimalDetailPageStyled from "./AnimalDetailPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { Link, useParams } from "react-router-dom";
import { loadSelectedAnimalActionCreator } from "../../store/animals/animalsSlice";
import { AnimalDataStructure } from "../../types";
import { useEffect } from "react";

const AnimalDetailPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getAnimalById } = useAnimals();
  const { idAnimal } = useParams();

  window.scrollTo(0, 0);

  useEffect(() => {
    (async () => {
      if (idAnimal) {
        const animal = await getAnimalById(idAnimal);

        dispatch(
          loadSelectedAnimalActionCreator(animal as AnimalDataStructure)
        );
      }
    })();
  }, [idAnimal, dispatch, getAnimalById]);

  const animal = useAppSelector((state) => state.animals.animalById);

  return (
    <AnimalDetailPageStyled>
      <img
        src={animal?.imageUrl}
        alt={`A ${animal?.species} named ${animal?.name}`}
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
      </div>
    </AnimalDetailPageStyled>
  );
};

export default AnimalDetailPage;
