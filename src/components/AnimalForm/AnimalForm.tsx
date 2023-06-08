import Button from "../Button/Button";
import AnimalFormStyled from "./AnimalFormStyled";

const AnimalForm = (): React.ReactElement => {
  return (
    <AnimalFormStyled className="animalForm-container" autoComplete="off">
      <div className="animalForm-container__control">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="species">Species</label>
        <select name="species" id="species">
          <option value="select">Select the species</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="races">Races</label>
        <input id="races" type="text" />
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender">
          <option value="select">Select the gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="size">Size</label>
        <select name="size" id="size">
          <option value="select">Select the size</option>
          <option value="small">Small Size</option>
          <option value="medium">Medium Size</option>
          <option value="big">Big Size</option>
        </select>
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="year">Year of Birth</label>
        <input id="year" type="number" />
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="image">Image URL</label>
        <input id="image" type="text" />
      </div>

      <div className="animalForm-container__control">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" />
      </div>

      <Button
        className="animalForm-container__submit"
        type="submit"
        text="Create"
      />
    </AnimalFormStyled>
  );
};

export default AnimalForm;
