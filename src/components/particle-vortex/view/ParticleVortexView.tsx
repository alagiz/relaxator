import React from "react";
import { IParticleVortexView } from "./IParticleVortexView";
import { ParticleVortex } from "particalizor-3000";
import { Styled } from "../styled";
import ContainerDimensions from "react-container-dimensions";

const ParticleVortexShowcaseView: React.FC<IParticleVortexView> = ({
  particleNumberValue,
  particleTraceWidthValue,
  particleLifeTimeValue,
  backgroundColor,
  vortexNumberValue,
  onShowCaseItemClick,
  showCases
}) => {
  return (
    <Styled.ShowcaseComponentContainer>
      <Styled.MenuItemsContainer>
        {showCases.map(showCase => (
          <Styled.MenuItem
            key={showCase.id}
            onClick={() => onShowCaseItemClick(showCase.id)}
          >
            <div> {showCase.title} </div>
          </Styled.MenuItem>
        ))}
      </Styled.MenuItemsContainer>

      <ContainerDimensions>
        {({ height, width }) => (
          <ParticleVortex
            imageWidth={width}
            imageHeight={height}
            vortexNumber={vortexNumberValue}
            particleTraceWidth={particleTraceWidthValue}
            particleNumber={particleNumberValue}
            particleLifeTime={particleLifeTimeValue}
            backgroundColor={backgroundColor}
          />
        )}
      </ContainerDimensions>
    </Styled.ShowcaseComponentContainer>
  );
};

export default ParticleVortexShowcaseView;
