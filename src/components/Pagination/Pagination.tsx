import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  className?: string;
  nextOnClick: () => void;
  previousOnClick: () => void;
  page: number;
  totalAnimals: number;
  limit: number;
}

const Pagination = ({
  className,
  nextOnClick,
  page,
  previousOnClick,
  limit,
  totalAnimals,
}: PaginationProps): React.ReactElement => {
  const totalPages = Math.ceil(totalAnimals / limit);

  const isPreviousDisable = page === 1;

  const isNextDisable = page === totalPages;

  return (
    <PaginationStyled className={className}>
      <span>
        {page} / {totalPages}
      </span>
      <Button
        className="pagination-button"
        text="Previous"
        actionOnClick={previousOnClick}
        isDisable={isPreviousDisable}
      >
        <img
          src="/images/icons/previous-icon.svg"
          alt="previous icon"
          width={32}
          height={32}
        />
      </Button>
      <Button
        className="pagination-button"
        text="Next"
        actionOnClick={nextOnClick}
        isDisable={isNextDisable}
      >
        <img
          src="/images/icons/next-icon.svg"
          alt="next icon"
          width={32}
          height={32}
        />
      </Button>
    </PaginationStyled>
  );
};

export default Pagination;
