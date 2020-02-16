import React from "react";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";
import ParticleVortex from "../../particle-vortex/container/ParticleVortex";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppView: React.FC = () => {
  const [vortexNumber] = useQueryParam("vortexNumber", NumberParam);
  const [particleNumber] = useQueryParam("particleNumber", NumberParam);
  const [particleTraceWidth] = useQueryParam("particleTraceWidth", NumberParam);
  const [particleLifeTime] = useQueryParam("particleLifeTime", NumberParam);
  const [backgroundColor] = useQueryParam("backgroundColor", StringParam);

  return (
    <Router>
      <Route exact path="/">
        <ParticleVortex
          particleNumber={particleNumber}
          particleTraceWidth={particleTraceWidth}
          particleLifeTime={particleLifeTime}
          backgroundColor={backgroundColor}
          vortexNumber={vortexNumber}
        />
      </Route>
    </Router>
  );
};

export default AppView;
