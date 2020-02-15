import React from "react";
import { mount, shallow } from "enzyme";
import ParticleVortex from "./ParticleVortex";
import ParticleVortexView from "../view/ParticleVortexView";

describe("Given a ParticleVortex", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <ParticleVortex
          backgroundColor={""}
          particleTraceWidth={1}
          particleNumber={1}
          particleLifeTime={1}
          vortexNumber={1}
        />
      );

      expect(component).toMatchSnapshot();
    });
    it("should render ParticleVortexView", () => {
      const component = mount(
        <ParticleVortex
          vortexNumber={1}
          particleLifeTime={1}
          particleNumber={1}
          particleTraceWidth={1}
          backgroundColor={""}
        />
      );

      expect(component.find(ParticleVortexView).length).toBe(1);
    });
  });
});
