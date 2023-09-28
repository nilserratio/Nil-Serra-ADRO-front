import styled from "styled-components";

const HeroStyled = styled.section`
  position: relative;
  margin: -32px -22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  margin-bottom: 30px;

  .hero-container {
    &__information {
      position: absolute;
      bottom: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 22px;
      gap: 8px;
      text-align: center;
    }

    &__image {
      filter: brightness(0.9);
    }

    &__information > h2 {
      font-size: 1.9rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.primary};
    }

    &__information > p {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.primary};
    }

    &__information > span {
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.primary};
      font-style: italic;
    }
  }
`;

export default HeroStyled;
