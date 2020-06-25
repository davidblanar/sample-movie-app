import React from "react";
import { shallow } from "enzyme";
import MovieBgImage from "../../src/components/MovieBgImage";
import { mockMovie } from "../mocks";

describe("MovieBgImage", () => {
  it("should render correctly", () => {
    const component = shallow(<MovieBgImage movie={mockMovie} />);
    expect(component.find("ImageBackground").prop("source")).toEqual({
      uri: "http://image.tmdb.org/t/p/w342poster path"
    });
    expect(component.find("Text").children().text()).toBe(mockMovie.title);
  });
});
