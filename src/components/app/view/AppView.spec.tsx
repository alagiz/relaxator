import React from "react";
import { shallow } from "enzyme";
import AppView from "./AppView";

describe("Given a AppView", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(<AppView />);

      expect(component).toMatchSnapshot();
    });
  });
});
