import styled from "styled-components";

const TopContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
`;

const ShowcaseSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 10px 5px 11px;
  background: #a8a8b2;
  color: black;
  cursor: pointer;
  font-weight: bold;
`;

export const Styled = {
  TopContainerContainer,
  ShowcaseSwitch
};
