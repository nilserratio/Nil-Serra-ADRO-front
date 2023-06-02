import styled from "styled-components";

const AnimalsPageStyled = styled.section`
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  padding: 32px 22px;
  height: 100vh;

  .animals-container {
    &__title {
      font-weight: 600;
      font-size: 2rem;
      line-height: 48px;
      text-align: center;
      margin-top: 20px;
    }
  }
`;

export default AnimalsPageStyled;
