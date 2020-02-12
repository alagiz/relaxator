import React from "react";
import { mount, shallow } from "enzyme";
import ParticleVortexShowcase from "./ParticleVortexShowcase";
import ParticleVortexShowcaseView from "../view/ParticleVortexShowcaseView";

describe("Given a ParticleVortexShowcase", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(<ParticleVortexShowcase />);

      expect(component).toMatchSnapshot();
    });
    it("should render ParticleVortexShowcaseView", () => {
      const component = mount(<ParticleVortexShowcase />);

      expect(component.find(ParticleVortexShowcaseView).length).toBe(1);
    });
  });
});
