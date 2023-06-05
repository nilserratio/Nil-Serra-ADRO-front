import LoaderStyled from "./LoaderStyled";
import { RaceBy } from "@uiball/loaders";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled className="loader-container">
      <div className="loader-container__loader" aria-label="loading">
        <span>Loading...</span>
        <RaceBy size={160} lineWeight={6} speed={1.2} color="black" />
      </div>
    </LoaderStyled>
  );
};

export default Loader;
