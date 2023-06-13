import Button from "../../components/Button/Button";
import AnimalDetailPageStyled from "./AnimalDetailPageStyled";

const AnimalDetailPage = (): React.ReactElement => {
  return (
    <AnimalDetailPageStyled>
      <img
        src="https://cdn.discordapp.com/attachments/1114238887548698687/1115308388017000478/bella-440.webp"
        alt="Bella dog on a green field"
      />
      <div className="details-container">
        <h1 className="details-container__tittle">Bella</h1>
        <div className="details-container__info">
          <span>Female</span>
          <span>Medium Size</span>
        </div>
        <span className="details-container__races">
          Border Collie, German Shepherd
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          arcu massa, rhoncus a ornare ut, aliquet vitae est. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Morbi ex eros, dignissim vitae
          pulvinar sed, interdum ut nunc. Donec auctor, sem iaculis maximus
          imperdiet, augue nisl suscipit nunc, vitae viverra mauris risus ut
          velit. Phasellus non fringilla eros. Mauris consequat blandit dui
          venenatis commodo. Quisque diam dolor, tempus a elit non, eleifend
          posuere libero. Suspendisse in turpis mattis, efficitur dui vel,
          accumsan purus.
        </p>
        <span className="details-container__years">7 years old</span>
      </div>
      <Button className="details-container__button" text="Adopt me!" />
    </AnimalDetailPageStyled>
  );
};

export default AnimalDetailPage;
