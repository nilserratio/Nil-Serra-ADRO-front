import Button from "../Button/Button";
import LoadMoreStyled from "./LoadMoreStyled";

interface LoadMoreProps {
  loadMoreOnClick?: () => void;
  totalAnimals: number;
  limit: number;
}

const LoadMore = ({
  loadMoreOnClick,
  totalAnimals,
  limit,
}: LoadMoreProps): React.ReactElement => {
  const isLoadMoreDisable = limit === totalAnimals;

  return (
    <LoadMoreStyled className="load-more">
      <div className="load-more__progress-bar">
        <label htmlFor="progress-bar">
          Showing {limit} of {totalAnimals}
        </label>
        <progress id="progress-bar" value={limit} max={totalAnimals}></progress>
      </div>
      <Button
        className="load-more__button"
        text="Show more"
        actionOnClick={loadMoreOnClick}
        isDisable={isLoadMoreDisable}
      />
    </LoadMoreStyled>
  );
};

export default LoadMore;
