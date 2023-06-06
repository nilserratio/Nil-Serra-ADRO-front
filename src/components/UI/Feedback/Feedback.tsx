import { useAppSelector } from "../../../store";
import Button from "../../Button/Button";
import FeedbackStyled from "./FeedbackStyled";

const Feedback = (): React.ReactElement => {
  const { isError, message } = useAppSelector((state) => state.ui);

  return (
    <FeedbackStyled className="feedback-container">
      <article className="modal-container" aria-label="feedback modal">
        {isError ? (
          <img
            src="images/feedback/error-icon.svg"
            alt="error icon"
            width={56}
            height={55}
            loading="lazy"
          />
        ) : (
          <img
            src="images/feedback/done-icon.svg"
            alt="successful icon"
            width={56}
            height={55}
            loading="lazy"
          />
        )}
        <h2
          className={`modal-container__title${
            isError ? " modal-container__title--error" : ""
          }`}
        >
          {isError ? "Error" : "Successful"}
        </h2>
        <p className="modal-container__text">{message}</p>
        <Button
          className={`modal-container__button${
            isError ? " modal-container__button--error" : ""
          }`}
          text="Accept"
        />
      </article>
    </FeedbackStyled>
  );
};

export default Feedback;
