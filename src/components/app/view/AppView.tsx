import React from "react";
import { IAppView } from "./IAppView";
import ParticleVortexShowcase from "../../particle-vortex-showcase/container/ParticleVortexShowcase";

const AppView: React.FC<IAppView> = ({}) => {
  return <ParticleVortexShowcase imageHeight={100} imageWidth={80} />;
};

export default AppView;
