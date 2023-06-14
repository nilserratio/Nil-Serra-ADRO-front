import { useNavigate } from "react-router-dom";
import AnimalForm from "../../components/AnimalForm/AnimalForm";
import useAnimals from "../../hooks/animals/useAnimals";
import { useAppDispatch } from "../../store";
import { createAnimalActionCreator } from "../../store/animals/animalsSlice";
import { AnimalDataStructure } from "../../types";
import CreateAnimalPageStyled from "./CreateAnimalPageStyled";
import { paths } from "../../utils/paths/paths";

const CreateAnimalPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { createAnimal } = useAnimals();
  const navigate = useNavigate();

  const actionOnSubmit = async (newAnimalData: AnimalDataStructure) => {
    const animal = await createAnimal(newAnimalData);

    if (animal) {
      dispatch(createAnimalActionCreator(animal));

      navigate(paths.home);
      window.scrollTo(0, 0);
    }
  };

  return (
    <CreateAnimalPageStyled className="createAnimal-container">
      <div>
        <h1 className="createAnimal-container__title">Add Adoption</h1>
        <span className="createAnimal-container__text">
          Add one animal to the adoption list
        </span>
      </div>
      <AnimalForm buttonText="Create" actionOnSubmit={actionOnSubmit} />
    </CreateAnimalPageStyled>
  );
};

export default CreateAnimalPage;
