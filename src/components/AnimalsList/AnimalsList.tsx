import { useAppSelector } from "../../store";
import AnimalCard from "../AnimalCard/AnimalCard";
import AnimalsListStyled from "./AnimalsListStyled";

const AnimalsList = (): React.ReactElement => {
  const animals = useAppSelector((state) => state.animals.animals);

  return (
    <AnimalsListStyled
      className="animalsList-container"
      aria-label="list of animals in adoption"
    >
      {animals.map((animal) => (
        <li key={animal.id} className="animalsList-container__card">
          <AnimalCard animal={animal} />
        </li>
      ))}
    </AnimalsListStyled>
  );
};

export default AnimalsList;
