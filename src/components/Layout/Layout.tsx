import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import { useAppSelector } from "../../store";
import Loader from "../UI/Loading/Loader";
import Feedback from "../UI/Feedback/Feedback";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const showFeedback = useAppSelector((state) => state.ui.showFeedback);

  return (
    <>
      {showFeedback && <Feedback />}
      {isLoading && <Loader />}
      <ContainerStyled>
        <Header />
        <Outlet />
        <ScrollToTop />
      </ContainerStyled>
    </>
  );
};

export default Layout;
