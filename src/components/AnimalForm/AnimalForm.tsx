import { useState } from "react";
import { AnimalDataStructure } from "../../types";
import Button from "../Button/Button";
import AnimalFormStyled from "./AnimalFormStyled";

interface AnimalFormProps {
  buttonText: string;
  actionOnSubmit: (newAnimalData: AnimalDataStructure) => void;
}

const AnimalForm = ({
  buttonText,
  actionOnSubmit,
}: AnimalFormProps): React.ReactElement => {
  const initialAnimalData: AnimalDataStructure = {
    name: "",
    species: "",
    races: "",
    gender: "",
    size: "",
    yearOfBirth: "",
    imageUrl: "",
    description: "",
  };

  const [animalData, setAnimalData] = useState(initialAnimalData);

  const onChangeData = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setAnimalData({
      ...animalData,
      [event.target.id]: event.target.value,
    });
  };

  const createOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actionOnSubmit(animalData);
    setAnimalData(initialAnimalData);
  };

  const isDisabledButton = Object.values(animalData).every(
    (value) => value === ""
  );

  return (
    <AnimalFormStyled
      className="animalForm-container"
      autoComplete="off"
      onSubmit={createOnSubmit}
    >
      <div className="animalForm-container__control">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={animalData.name}
          onChange={onChangeData}
        />
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="species">Species</label>
        <select
          name="species"
          id="species"
          value={animalData.species}
          onChange={onChangeData}
        >
          <option value="">--Select the species--</option>
          <option value="Dogs">Dog</option>
          <option value="Cats">Cat</option>
          <option value="Others">Other</option>
        </select>
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="races">Races</label>
        <input
          id="races"
          type="text"
          value={animalData.races}
          onChange={onChangeData}
        />
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          value={animalData.gender}
          onChange={onChangeData}
        >
          <option value="">--Select the gender--</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="size">Size</label>
        <select
          name="size"
          id="size"
          value={animalData.size}
          onChange={onChangeData}
        >
          <option value="">--Select the size--</option>
          <option value="Small Size">Small Size</option>
          <option value="Medium Size">Medium Size</option>
          <option value="Big Size">Big Size</option>
        </select>
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="yearOfBirth">Year of Birth</label>
        <input
          id="yearOfBirth"
          type="number"
          value={animalData.yearOfBirth?.toString()}
          onChange={onChangeData}
        />
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          type="text"
          value={animalData.imageUrl}
          onChange={onChangeData}
        />
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={animalData.description}
          onChange={onChangeData}
        />
      </div>

      <Button
        className="animalForm-container__submit"
        type="submit"
        text={buttonText}
        isDisable={isDisabledButton}
      />
    </AnimalFormStyled>
  );
};

export default AnimalForm;
