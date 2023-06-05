import styled from "styled-components";

const AnimalsPageStyled = styled.main`
  background-color: ${(props) => props.theme.colors.primaryBackground};
  padding: 32px 22px;

  .animals-container {
    &__title {
      font-weight: 600;
      font-size: 2rem;
      line-height: 48px;
      margin: 20px 0;
    }
  }
`;

export default AnimalsPageStyled;