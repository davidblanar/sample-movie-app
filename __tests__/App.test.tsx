import "react-native";
import React from "react";
import { shallow } from "enzyme";
import App from "../App";

jest.mock("react-native-gesture-handler", () => ({
  Direction: {}
}));

describe("App", () => {
  it("renders correctly", () => {
    const app = shallow(<App />);
    expect(app.find("Navigator").exists()).toBe(true);
  });
});
