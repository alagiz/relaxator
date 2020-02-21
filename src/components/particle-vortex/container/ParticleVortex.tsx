import React, { useState } from "react";
import ParticleVortexView from "../view/ParticleVortexView";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";
import { isNil } from "ramda";
import { useHistory } from "react-router";
import { IShowCase } from "./IShowCase";

const ParticleVortex: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const [vortexNumber] = useQueryParam("vortexNumber", NumberParam);
  const [particleNumber] = useQueryParam("particleNumber", NumberParam);
  const [particleTraceWidth] = useQueryParam("particleTraceWidth", NumberParam);
  const [particleLifeTime] = useQueryParam("particleLifeTime", NumberParam);
  const [backgroundColor] = useQueryParam("backgroundColor", StringParam);

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

  const showCases: IShowCase[] = [
    {
      id: "flowMachine",
      urlPath:
        "?particleLifeTime=30&particleTraceWidth=40&vortexNumber=3&particleNumber=400&backgroundColor=%231a414e",
      title: "FLOW MACHINE"
    },
    {
      id: "dimensionalSpin",
      urlPath:
        "?particleLifeTime=100&particleTraceWidth=250&vortexNumber=4&particleNumber=20&backgroundColor=%232b2b59",
      title: "DIMENSIONAL SPIN"
    },
    {
      id: "snakeUniverse",
      urlPath:
        "?particleLifeTime=1000&particleTraceWidth=30&vortexNumber=3&particleNumber=200&backgroundColor=%231b293b",
      title: "SNAKE UNIVERSE"
    },
    {
      id: "galacticJam",
      urlPath:
        "?particleLifeTime=1000&particleTraceWidth=1&vortexNumber=3&particleNumber=300&backgroundColor=%2315151a",
      title: "GALACTIC JAM"
    },
    {
      id: "windmillOfTime",
      urlPath: "",
      title: "WINDMILL OF TIME"
    }
  ];

  const history = useHistory();

  const onMenuToggle = () => setIsMenuVisible(!isMenuVisible);
  const onGithubLinkClick = () =>
    (window.location.href = "https://github.com/ArtemAlagizov/relaxator");
  const onShowCaseItemClick = (showCaseId: string) => {
    const selectedShowCase = showCases.find(
      showCase => showCase.id === showCaseId
    );
    const redirectPath = isNil(selectedShowCase)
      ? ""
      : selectedShowCase.urlPath;

    history.push(redirectPath);
  };

  return (
    <ParticleVortexView
      particleLifeTimeValue={selectedParticleLifeTime}
      particleNumberValue={selectedParticleNumber}
      particleTraceWidthValue={selectedParticleTraceWidth}
      vortexNumberValue={selectedVortexNumber}
      backgroundColor={selectedBackgroundColor}
      onShowCaseItemClick={onShowCaseItemClick}
      showCases={showCases}
      isMenuVisible={isMenuVisible}
      onMenuToggle={onMenuToggle}
      onGithubLinkClick={onGithubLinkClick}
    />
  );
};

export default ParticleVortex;
