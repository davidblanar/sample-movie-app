import React from "react";
import { shallow } from "enzyme";
import Player from "../../src/components/Player";

describe("Player", () => {
  it("should render correctly", () => {
    const component = shallow(<Player />);
    expect(component.find("Video").prop("controls")).toBe(true);
    expect(component.find("Video").prop("fullscreen")).toBe(true);
    expect(component.find("Video").prop("source")).toEqual({
      uri:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    });
  });
});
