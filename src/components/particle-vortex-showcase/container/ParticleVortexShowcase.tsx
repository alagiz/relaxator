import React from "react";
import ParticleVortexShowcaseView from "../view/ParticleVortexShowcaseView";
import { IParticleVortexShowcase } from "./IParticleVortexShowcase";
import { isNil } from "ramda";

const ParticleVortexShowcase: React.FC<IParticleVortexShowcase> = ({
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
    <ParticleVortexShowcaseView
      particleLifeTimeValue={selectedParticleLifeTime}
      particleNumberValue={selectedParticleNumber}
      particleTraceWidthValue={selectedParticleTraceWidth}
      vortexNumberValue={selectedVortexNumber}
      backgroundColor={selectedBackgroundColor}
    />
  );
};

export default ParticleVortexShowcase;
