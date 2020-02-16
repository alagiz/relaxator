import styled from "styled-components";

const ShowcaseComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MenuItemsContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: white;
`;

const MenuItem = styled.div`
  padding: 10px;
`;

export const Styled = {
  MenuItemsContainer,
  MenuItem,
  ShowcaseComponentContainer
};
