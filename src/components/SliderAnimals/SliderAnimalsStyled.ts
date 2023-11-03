import styled from "styled-components";

const SliderAnimalsStyled = styled.section`
  width: 100%;

  .swiper {
    padding-bottom: 45px;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    border-radius: 12px;
    font-size: 18px;
    background: transparent;
    width: 277.6px;
    height: 366.2px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .swiper-slide a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 12px;
    padding: 12px;
    border: solid ${(props) => props.theme.colors.secondaryBackground};
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.25rem;
    letter-spacing: 1px;
    width: 277.6px;
  }

  .swiper-pagination-bullet {
    transition: all 0.5s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.colors.tertiary};
    width: 24px;
    border-radius: 8px;
  }
`;

export default SliderAnimalsStyled;
