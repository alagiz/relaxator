import React, { useState } from "react";
import ParticleVortexShowcaseView from "../view/ParticleVortexShowcaseView";
import { IParticleVortexShowcase } from "./IParticleVortexShowcase";

const ParticleVortexShowcase: React.FC<IParticleVortexShowcase> = ({}) => {
  const [
    selectedParticleNumberValue,
    setSelectedParticleNumberValue
  ] = useState<number>(70);
  const [
    selectedParticleTraceWidthValue,
    setSelectedParticleTraceWidthValue
  ] = useState<number>(600);
  const [
    selectedParticleLifeTimeValue,
    setSelectedParticleLifeTimeValue
  ] = useState<number>(1100);
  const [selectedVortexNumberValue, setSelectedVortexNumberValue] = useState<
    number
  >(5);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState<
    string
  >("#33344c");

  const onChange = (value: number) =>
    setSelectedParticleNumberValue(value as number);

  const onTraceWidthChange = (value: number) =>
    setSelectedParticleTraceWidthValue(value as number);

  const onLifeTimeChange = (value: number) =>
    setSelectedParticleLifeTimeValue(value as number);

  const onVortexNumberChange = (value: number) =>
    setSelectedVortexNumberValue(value as number);

  const onBackgroundColorChange = (value: string) =>
    setSelectedBackgroundColor(value as string);

  return (
    <ParticleVortexShowcaseView
      particleLifeTimeValue={selectedParticleLifeTimeValue}
      particleNumberValue={selectedParticleNumberValue}
      particleTraceWidthValue={selectedParticleTraceWidthValue}
      vortexNumberValue={selectedVortexNumberValue}
      backgroundColor={selectedBackgroundColor}
    />
  );
};

export default ParticleVortexShowcase;
