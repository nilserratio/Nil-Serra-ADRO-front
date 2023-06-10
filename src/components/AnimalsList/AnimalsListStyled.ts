import styled from "styled-components";

const AnimalsListStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  margin-top: 30px;

  .animalsList-container {
    &__create {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 8px 24px;
      width: 100%;
      max-width: 276px;
      border-radius: 12px;
      background: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default AnimalsListStyled;
