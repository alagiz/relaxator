import React from "react";
import { mount, shallow } from "enzyme";
import ParticleVortex from "./ParticleVortex";
import ParticleVortexView from "../view/ParticleVortexView";

jest.mock("react-router-dom");
jest.mock("react-router", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("Given a ParticleVortex", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(<ParticleVortex />);

      expect(component).toMatchSnapshot();
    });
    it("should render ParticleVortexView", () => {
      const component = mount(<ParticleVortex />);

      expect(component.find(ParticleVortexView).length).toBe(1);
    });
  });
});
