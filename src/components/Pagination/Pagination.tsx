import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

const Pagination = (): React.ReactElement => {
  return (
    <PaginationStyled className="pagination-container">
      <Button className="pagination-container__button" text="Previous">
        <img src="/images/icons/previous-icon.svg" alt="previous icon" />
      </Button>
      <Button className="pagination-container__button" text="Next">
        <img src="/images/icons/next-icon.svg" alt="next icon" />
      </Button>
    </PaginationStyled>
  );
};

export default Pagination;
