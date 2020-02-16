import React from "react";
import ParticleVortexView from "../view/ParticleVortexView";
import { IParticleVortex } from "./IParticleVortex";
import { isNil } from "ramda";
import { useHistory } from "react-router";

const ParticleVortex: React.FC<IParticleVortex> = ({
  particleNumber,
  particleLifeTime,
  particleTraceWidth,
  vortexNumber,
  backgroundColor
}) => {
  const selectedParticleNumber = isNil(particleNumber) ? 30 : particleNumber;
  const selectedParticleTraceWidth = isNil(particleTraceWidth)
    ? 600
    : particleTraceWidth;
  const selectedParticleLifeTime = isNil(particleLifeTime)
    ? 1100
    : particleLifeTime;
  const selectedVortexNumber = isNil(vortexNumber) ? 2 : vortexNumber;
  const selectedBackgroundColor = isNil(backgroundColor)
    ? "#33344c"
    : backgroundColor;

  const history = useHistory();
  const onShowCaseItemClick = (showCase: string) => {
    history.push(
      "?particleLifeTime=1000&particleTraceWidth=30&vortexNumber=3&particleNumber=200&backgroundColor=%231b293b"
    );
  };

  return (
    <ParticleVortexView
      particleLifeTimeValue={selectedParticleLifeTime}
      particleNumberValue={selectedParticleNumber}
      particleTraceWidthValue={selectedParticleTraceWidth}
      vortexNumberValue={selectedVortexNumber}
      backgroundColor={selectedBackgroundColor}
      onShowCaseItemClick={onShowCaseItemClick}
    />
  );
};

export default ParticleVortex;
