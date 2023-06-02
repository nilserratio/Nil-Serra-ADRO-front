import { useEffect } from "react";
import AnimalsPageStyled from "./AnimalsPageStyled";
import { useAppDispatch } from "../../store";
import { loadAnimalsActionCreator } from "../../store/animals/animalsSlice";
import { animalsMock } from "../../mocks/animals/animalsMocks";

const AnimalsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAnimalsActionCreator(animalsMock));
  }, [dispatch]);

  return (
    <AnimalsPageStyled className="animals-container">
      <h1 className="animals-container__title">In adoption</h1>
    </AnimalsPageStyled>
  );
};

export default AnimalsPage;
