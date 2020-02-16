import React from "react";
import ParticleVortex from "../../particle-vortex/container/ParticleVortex";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppView: React.FC = () => {
  return (
    <Router>
      <Route exact path="/">
        <ParticleVortex />
      </Route>
    </Router>
  );
};

export default AppView;
