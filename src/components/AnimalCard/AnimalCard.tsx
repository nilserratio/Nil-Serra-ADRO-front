import { AnimalDataStructure } from "../../types";
import Button from "../Button/Button";
import AnimalCardStyled from "./AnimalCardStyled";

interface AnimalCardProps {
  animal: AnimalDataStructure;
  isLazy: "lazy" | "eager";
  actionOnClick: (idAnimal: string) => void;
}

const AnimalCard = ({
  animal: { name, species, size, imageUrl, gender, id },
  isLazy,
  actionOnClick,
}: AnimalCardProps): React.ReactElement => {
  return (
    <AnimalCardStyled className="animal-card">
      <img
        className="animal-card__image"
        src={imageUrl}
        alt={`The ${species} named ${name}`}
        width={276}
        height={235}
        loading={isLazy}
      />
      <div className="animal-card__information">
        <h2>{name}</h2>
        <div className="animal-card__characteristics">
          <span>{gender}</span>
          <span>{size}</span>
        </div>
        <div className="animal-card__buttons">
          <Button
            text="Update"
            ariaLabel="update button"
            className="update-button"
          />
          <Button
            text="Delete"
            ariaLabel="delete button"
            className="delete-button"
            actionOnClick={() => actionOnClick(id)}
          />
        </div>
      </div>
    </AnimalCardStyled>
  );
};

export default AnimalCard;
