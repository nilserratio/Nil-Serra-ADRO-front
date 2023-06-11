import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  className?: string;
}

const Pagination = ({ className }: PaginationProps): React.ReactElement => {
  return (
    <PaginationStyled className={className}>
      <Button className="pagination-button" text="Previous">
        <img
          src="/images/icons/previous-icon.svg"
          alt="previous icon"
          width={32}
          height={32}
        />
      </Button>
      <Button className="pagination-button" text="Next">
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
