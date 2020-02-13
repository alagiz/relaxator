import React from "react";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";
import ParticleVortexShowcase from "../../particle-vortex-showcase/container/ParticleVortexShowcase";

const AppView: React.FC = () => {
  const [vortexNumber] = useQueryParam("vortex-number", NumberParam);
  const [particleNumber] = useQueryParam("particle-number", NumberParam);
  const [particleTraceWidth] = useQueryParam(
    "particle-trace-width",
    NumberParam
  );
  const [particleLifeTime] = useQueryParam("particle-life-time", NumberParam);
  const [backgroundColor] = useQueryParam("background-color", StringParam);

  return (
    <ParticleVortexShowcase
      particleNumber={particleNumber}
      particleTraceWidth={particleTraceWidth}
      particleLifeTime={particleLifeTime}
      backgroundColor={backgroundColor}
      vortexNumber={vortexNumber}
    />
  );
};

export default AppView;
