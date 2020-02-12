import styled from "styled-components";

const ShowcaseComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;
`;

const PropertiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PropertiesSet = styled.div`
  flex: 1 1 300px;
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  flex: 1;
`;

const ImageContainer = styled.div`
  margin: 10px;
  max-width: 100%;
`;

export const Styled = {
  ImageContainer,
  Images,
  PropertiesContainer,
  PropertiesSet,
  ShowcaseComponentContainer
};
