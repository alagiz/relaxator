import React from "react";
import ParticleVortexView from "../view/ParticleVortexView";
import { IParticleVortex } from "./IParticleVortex";
import { isNil } from "ramda";

const ParticleVortex: React.FC<IParticleVortex> = ({
  particleNumber,
  particleLifeTime,
  particleTraceWidth,
  vortexNumber,
  backgroundColor
}) => {
  const selectedParticleNumber = isNil(particleNumber) ? 70 : particleNumber;
  const selectedParticleTraceWidth = isNil(particleTraceWidth)
    ? 600
    : particleTraceWidth;
  const selectedParticleLifeTime = isNil(particleLifeTime)
    ? 1100
    : particleLifeTime;
  const selectedVortexNumber = isNil(vortexNumber) ? 5 : vortexNumber;
  const selectedBackgroundColor = isNil(backgroundColor)
    ? "#33344c"
    : backgroundColor;

  return (
    <ParticleVortexView
      particleLifeTimeValue={selectedParticleLifeTime}
      particleNumberValue={selectedParticleNumber}
      particleTraceWidthValue={selectedParticleTraceWidth}
      vortexNumberValue={selectedVortexNumber}
      backgroundColor={selectedBackgroundColor}
    />
  );
};

export default ParticleVortex;
