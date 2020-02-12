import React, { useState } from "react";
import ParticleVortexShowcaseView from "../view/ParticleVortexShowcaseView";

const ParticleVortexShowcase: React.FC = ({}) => {
  const [
    selectedParticleNumberValue,
    setSelectedParticleNumberValue
  ] = useState<number>(30);
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
  >(3);
  const [selectedImageHeight, setSelectedImageHeight] = useState<number>(500);
  const [selectedImageWidth, setSelectedImageWidth] = useState<number>(900);
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

  const onImageWidthChange = (value: number) =>
    setSelectedImageWidth(value as number);

  const onImageHeightChange = (value: number) =>
    setSelectedImageHeight(value as number);

  const onBackgroundColorChange = (value: string) =>
    setSelectedBackgroundColor(value as string);

  return (
    <ParticleVortexShowcaseView
      particleLifeTimeValue={selectedParticleLifeTimeValue}
      particleNumberValue={selectedParticleNumberValue}
      particleTraceWidthValue={selectedParticleTraceWidthValue}
      vortexNumberValue={selectedVortexNumberValue}
      backgroundColor={selectedBackgroundColor}
      imageWidth={selectedImageWidth}
      imageHeight={selectedImageHeight}
    />
  );
};

export default ParticleVortexShowcase;
