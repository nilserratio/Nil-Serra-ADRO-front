import { useAppDispatch, useAppSelector } from "../../store";
import AnimalCard from "../AnimalCard/AnimalCard";
import AnimalsListStyled from "./AnimalsListStyled";
import { removeAnimalActionCreator } from "../../store/animals/animalsSlice";

const AnimalsList = (): React.ReactElement => {
  const animals = useAppSelector((state) => state.animals.animals);
  const dispatch = useAppDispatch();

  const deleteOnClick = (idAnimal: string) => {
    dispatch(removeAnimalActionCreator(idAnimal));
  };

  return (
    <AnimalsListStyled
      className="animalsList-container"
      aria-label="list of animals in adoption"
    >
      {animals.map((animal, index) => (
        <li key={animal.id} className="animalsList-container__card">
          <AnimalCard
            animal={animal}
            key={animal.id}
            isLazy={index === 0 ? "eager" : "lazy"}
            actionOnClick={deleteOnClick}
          />
        </li>
      ))}
    </AnimalsListStyled>
  );
};

export default AnimalsList;
