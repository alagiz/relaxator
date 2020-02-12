import React from "react";
import { IAppView } from "./IAppView";
import { Styled } from "../styled";
import ParticleVortexShowcase from "../../particle-vortex-showcase/container/ParticleVortexShowcase";

const AppView: React.FC<IAppView> = ({}) => {
  return (
    <Styled.TopContainerContainer>
      <ParticleVortexShowcase />
    </Styled.TopContainerContainer>
  );
};

export default AppView;
