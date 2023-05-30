import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
