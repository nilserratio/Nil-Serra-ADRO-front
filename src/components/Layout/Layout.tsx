import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import { useAppSelector } from "../../store";
import Loader from "../UI/Loading/Loader";

const Layout = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading && <Loader />}
      <ContainerStyled>
        <Header />
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
