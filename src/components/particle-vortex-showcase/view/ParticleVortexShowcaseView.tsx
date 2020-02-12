import React from "react";
import { IParticleVortexShowcaseView } from "./IParticleVortexShowcaseView";
import { ParticleVortex } from "particalizor-3000";
import { Styled } from "../styled";

const ParticleVortexShowcaseView: React.FC<IParticleVortexShowcaseView> = ({
  particleNumberValue,
  particleTraceWidthValue,
  particleLifeTimeValue,
  imageWidth,
  imageHeight,
  backgroundColor,
  vortexNumberValue
}) => {
  return (
    <Styled.ShowcaseComponentContainer>
      <ParticleVortex
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        vortexNumber={vortexNumberValue}
        particleTraceWidth={particleTraceWidthValue}
        particleNumber={particleNumberValue}
        particleLifeTime={particleLifeTimeValue}
        backgroundColor={backgroundColor}
      />
    </Styled.ShowcaseComponentContainer>
  );
};

export default ParticleVortexShowcaseView;
