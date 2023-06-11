import styled from "styled-components";

const PaginationStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;

  .pagination-container {
    &__button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 8px 24px;
      width: 100%;
      max-width: 276px;
      border: solid;
      border-color: ${(props) => props.theme.colors.secondaryBackground};
      border-width: 1px;
      border-radius: 12px;
      background: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default PaginationStyled;
