import styled from "styled-components";

const LoginPageStyled = styled.section`
  background: ${(props) => props.theme.colors.secondaryBackground};
  display: flex;
  flex-direction: column;
  align-items: center;

  .login-container {
    &__title {
      font-weight: 600;
      font-size: 2.5rem;
      line-height: 48px;
    }
  }
`;

export default LoginPageStyled;
