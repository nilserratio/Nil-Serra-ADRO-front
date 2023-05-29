import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <p>ADRO Osona</p>
      </ContainerStyled>
    </>
  );
};

export default App;
