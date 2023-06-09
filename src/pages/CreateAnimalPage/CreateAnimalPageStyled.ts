import styled from "styled-components";

const CreateAnimalPageStyled = styled.main`
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  padding: 32px 22px;

  .createAnimal-container {
    &__title {
      font-weight: 600;
      font-size: 2rem;
      line-height: 48px;
      text-align: center;
      margin: 20px 0;
    }

    &__text {
      font-size: 1.25rem;
      text-align: center;
      margin-top: 20px;
    }
  }
`;

export default CreateAnimalPageStyled;
