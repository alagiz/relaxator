import React from "react";
import { shallow } from "enzyme";
import ParticleVortexShowcaseView from "./ParticleVortexView";

describe("Given a ParticleVortexView", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <ParticleVortexShowcaseView
          particleTraceWidthValue={1}
          particleNumberValue={1}
          particleLifeTimeValue={1}
          backgroundColor={"red"}
          vortexNumberValue={3}
          onShowCaseItemClick={jest.fn()}
          showCases={[]}
          onMenuToggle={jest.fn()}
          isMenuVisible={false}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
