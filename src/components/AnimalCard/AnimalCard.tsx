import { Link } from "react-router-dom";
import { useAppSelector } from "../../store";
import { AnimalDataStructure } from "../../types";
import Button from "../Button/Button";
import AnimalCardStyled from "./AnimalCardStyled";

interface AnimalCardProps {
  animal: AnimalDataStructure;
  isLazy: "lazy" | "eager";
  actionOnClick: (idAnimal: string) => void;
}

const AnimalCard = ({
  animal: { name, species, size, imageUrl, gender, id, user },
  isLazy,
  actionOnClick,
}: AnimalCardProps): React.ReactElement => {
  const { id: userId, isLogged } = useAppSelector((state) => state.user);

  const isCardOwner = isLogged && userId === user;

  return (
    <AnimalCardStyled className="animal-card">
      <Link to={`/${id}`}>
        <img
          className="animal-card__image"
          src={imageUrl}
          alt={`The ${species} named ${name}`}
          width={276}
          height={235}
          loading={isLazy}
        />
      </Link>
      <div className="animal-card__information">
        <h2>{name}</h2>
        <div className="animal-card__characteristics">
          <span>{gender}</span>
          <span>{size}</span>
        </div>
        {isCardOwner && (
          <div className="animal-card__buttons">
            <Button text="Update" className="update-button" />
            <Button
              text="Delete"
              className="delete-button"
              actionOnClick={() => actionOnClick(id as string)}
            />
          </div>
        )}
      </div>
    </AnimalCardStyled>
  );
};

export default AnimalCard;
