import React from "react";
import { mount, shallow } from "enzyme";
import ParticleVortexShowcase from "./ParticleVortexShowcase";
import ParticleVortexShowcaseView from "../view/ParticleVortexShowcaseView";

describe("Given a ParticleVortexShowcase", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <ParticleVortexShowcase
          backgroundColor={""}
          particleTraceWidth={1}
          particleNumber={1}
          particleLifeTime={1}
          vortexNumber={1}
        />
      );

      expect(component).toMatchSnapshot();
    });
    it("should render ParticleVortexShowcaseView", () => {
      const component = mount(
        <ParticleVortexShowcase
          vortexNumber={1}
          particleLifeTime={1}
          particleNumber={1}
          particleTraceWidth={1}
          backgroundColor={""}
        />
      );

      expect(component.find(ParticleVortexShowcaseView).length).toBe(1);
    });
  });
});
