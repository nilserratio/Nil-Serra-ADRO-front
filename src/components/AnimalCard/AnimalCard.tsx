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
        {isCardOwner && (
          <div className="animal-card__buttons">
            <Button className="update-button" ariaLabel="update button">
              <img
                src="images/update-icon.svg"
                alt="update button icon"
                width={32}
                height={32}
              />
            </Button>
            <Button
              className="delete-button"
              ariaLabel="button to delete an animal card"
              actionOnClick={() => actionOnClick(id)}
            >
              <img
                src="images/delete-icon.svg"
                alt="delete button icon"
                width={32}
                height={32}
              />
            </Button>
          </div>
        )}
      </div>
    </AnimalCardStyled>
  );
};

export default AnimalCard;
