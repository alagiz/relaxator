import React from "react";
import { shallow } from "enzyme";
import ParticleVortexOnly from "./ParticleVortexOnly";

describe("Given a ParticleVortexOnly", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <ParticleVortexOnly
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
