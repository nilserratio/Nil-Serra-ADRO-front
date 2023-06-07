import { useAppDispatch, useAppSelector } from "../../../store";
import { hideFeedbackActionCreator } from "../../../store/iu/uiSlice";
import Button from "../../Button/Button";
import FeedbackStyled from "./FeedbackStyled";

const Feedback = (): React.ReactElement => {
  const { isError, message } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleOnClose = () => {
    dispatch(hideFeedbackActionCreator());
  };

  return (
    <FeedbackStyled
      className="feedback-container"
      role="button"
      tabIndex={0}
      onClick={handleOnClose}
    >
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
