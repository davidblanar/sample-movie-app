import "react-native";
import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  it("renders correctly", () => {
    const app = shallow(<App />);
    console.log(app.debug());
  });
});
