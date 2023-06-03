import { AnimalDataStructure } from "../../types";
import AnimalCardStyled from "./AnimalCardStyled";

interface AnimalCardProps {
  animal: AnimalDataStructure;
}

const AnimalCard = ({
  animal: { name, species, size, imageUrl, gender },
}: AnimalCardProps): React.ReactElement => {
  return (
    <AnimalCardStyled className="animal-card">
      <img
        className="animal-card__image"
        src={imageUrl}
        alt={`The ${species} named ${name}`}
        width={276}
        height={235}
      />
      <div className="animal-card__information">
        <h2>{name}</h2>
        <div className="animal-card__characteristics">
          <span>{gender}</span>
          <span>{size}</span>
        </div>
      </div>
    </AnimalCardStyled>
  );
};

export default AnimalCard;
