import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";

const App = (): React.ReactElement => {
  return (
    <>
      <Header
        picture="images/adro-logo.svg"
        alternativeText="Adro Osona logo"
      />
      <ContainerStyled>
        <p>ADRO Osona</p>
      </ContainerStyled>
    </>
  );
};

export default App;
