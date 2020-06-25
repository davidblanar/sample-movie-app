import React from "react";
import { shallow } from "enzyme";
import Navigator, { Routes } from "../../src/components/Navigator";

jest.mock("react-native-gesture-handler", () => ({
  Direction: {}
}));

describe("Navigator", () => {
  it("should render correctly", () => {
    const component = shallow(<Navigator />);
    expect(component.find("StackNavigator").exists()).toBe(true);
    expect(component.find("Screen").at(0).prop("name")).toBe(Routes.HOME);
    expect(component.find("Screen").at(1).prop("name")).toBe(Routes.DETAIL);
  });
});
