import React from "react";
import { IParticleVortexOnly } from "./IParticleVortexOnly";
import { ParticleVortex } from "particalizor-3000";
import ContainerDimensions from "react-container-dimensions";

const ParticleVortexOnly: React.FC<IParticleVortexOnly> = ({
  particleNumberValue,
  particleTraceWidthValue,
  particleLifeTimeValue,
  backgroundColor,
  vortexNumberValue
}) => {
  return (
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
  );
};

export default React.memo(ParticleVortexOnly);
