import React from "react";
import { shallow } from "enzyme";
import ParticleVortexShowcaseView from "./ParticleVortexShowcaseView";

describe("Given a ParticleVortexShowcaseView", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <ParticleVortexShowcaseView
          particleTraceWidthValue={1}
          particleNumberValue={1}
          particleLifeTimeValue={1}
          backgroundColor={"red"}
          vortexNumberValue={3}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
