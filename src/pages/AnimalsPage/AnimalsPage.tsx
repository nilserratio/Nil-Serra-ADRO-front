import { useEffect } from "react";
import AnimalsPageStyled from "./AnimalsPageStyled";
import { useAppDispatch } from "../../store";
import { loadAnimalsActionCreator } from "../../store/animals/animalsSlice";
import { animalsMock } from "../../mocks/animals/animalsMocks";
import AnimalsList from "../../components/AnimalsList/AnimalsList";

const AnimalsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAnimalsActionCreator(animalsMock));
  }, [dispatch]);

  return (
    <AnimalsPageStyled className="animals-container">
      <div>
        <h1 className="animals-container__title">In adoption</h1>
        <span>You can&apos;t buy love, but you can reccue it.</span>
      </div>
      <AnimalsList />
    </AnimalsPageStyled>
  );
};

export default AnimalsPage;
