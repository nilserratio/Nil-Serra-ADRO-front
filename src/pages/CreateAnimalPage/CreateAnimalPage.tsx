import AnimalForm from "../../components/AnimalForm/AnimalForm";
import CreateAnimalPageStyled from "./CreateAnimalPageStyled";

const CreateAnimalPage = (): React.ReactElement => {
  return (
    <CreateAnimalPageStyled className="createAnimal-container">
      <h1 className="createAnimal-container__title">Add Adoption</h1>
      <span className="createAnimal-container__text">
        Add one animal to the adoption list
      </span>
      <AnimalForm />
    </CreateAnimalPageStyled>
  );
};

export default CreateAnimalPage;
