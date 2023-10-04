import styled from "styled-components";

const ScrollToTopStyled = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: ${(props) => props.theme.colors.primary};
  right: 0px;
  width: 45px;
  height: 45px;
  bottom: 50px;
  font-size: 2rem;
  z-index: 1;
`;

export default ScrollToTopStyled;
