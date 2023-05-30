import styled from "styled-components";

const LoginPageStyled = styled.section`
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 22px;
  height: 100vh;

  .login-container {
    &__title {
      font-weight: 600;
      font-size: 2.5rem;
      line-height: 48px;
    }
  }
`;

export default LoginPageStyled;
