import React from "react";
import { mount, shallow } from "enzyme";
import App from "./App";
import AppView from "../view/AppView";

describe("Given a App", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(<App />);

      expect(component).toMatchSnapshot();
    });
    it("should render AppView", () => {
      const component = mount(<App />);

      expect(component.find(AppView).length).toBe(1);
    });
  });
});
