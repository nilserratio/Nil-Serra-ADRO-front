import { useAppSelector } from "../../store";
import AnimalCard from "../AnimalCard/AnimalCard";
import AnimalsListStyled from "./AnimalsListStyled";
import useAnimals from "../../hooks/animals/useAnimals";

const AnimalsList = (): React.ReactElement => {
  const animals = useAppSelector((state) => state.animals.animals);
  const { removeAnimal } = useAnimals();

  const deleteOnClick = async (idAnimal: string) => {
    await removeAnimal(idAnimal);
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
