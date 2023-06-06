import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { paths } from "../../utils/paths/paths";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  const navigate = useNavigate();

  const actionOnClick = () => {
    navigate(paths.home, { replace: true });
  };

  return (
    <NotFoundPageStyled className="notFound-container">
      <img
        className="notFound-container__image"
        src="images/notFound-bg.webp"
        alt="A dog with its back facing the screen"
        width={375}
        height={750}
      />
      <div className="info-cotainer">
        <span className="info-cotainer__text">Oops!</span>
        <h1 className="info-cotainer__title">404 - Something went wrong...</h1>
        <Button
          className="info-cotainer__button"
          text="Back to Homepage"
          actionOnClick={actionOnClick}
        />
      </div>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
