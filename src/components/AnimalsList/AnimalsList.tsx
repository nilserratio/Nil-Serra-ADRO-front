import { useAppSelector } from "../../store";
import AnimalCard from "../AnimalCard/AnimalCard";
import AnimalsListStyled from "./AnimalsListStyled";
import useAnimals from "../../hooks/animals/useAnimals";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { paths } from "../../utils/paths/paths";

const AnimalsList = (): React.ReactElement => {
  const animals = useAppSelector((state) => state.animals.animals);
  const { removeAnimal } = useAnimals();
  const { isLogged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const deleteOnClick = async (idAnimal: string) => {
    await removeAnimal(idAnimal);
  };

  return (
    <AnimalsListStyled
      className="animalsList-container"
      aria-label="list of animals in adoption"
    >
      {isLogged && (
        <Button
          text="Add an animal"
          className="animalsList-container__create"
          actionOnClick={() => navigate(paths.create)}
        >
          <img src="/images/add-icon.svg" alt="add animal icon" />
        </Button>
      )}
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
