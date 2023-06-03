import { AnimalDataStructure } from "../../types";
import AnimalsListStyled from "./AnimalsListStyled";

interface AnimalsListProps {
  animals: AnimalDataStructure[];
}

const AnimalsList = ({ animals }: AnimalsListProps): React.ReactElement => {
  return (
    <AnimalsListStyled
      className="animalsList-container"
      aria-label="list of animals in adoption"
    >
      {animals.map((animal) => (
        <li key={animal.id} className="animalsList-container__card">
          <span>Animal Card</span>
        </li>
      ))}
    </AnimalsListStyled>
  );
};

export default AnimalsList;
