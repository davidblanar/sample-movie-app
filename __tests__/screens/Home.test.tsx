import * as React from "react";
import { shallow } from "enzyme";
import mockAxios from "jest-mock-axios";
import Home from "../../src/screens/Home";
import { mockMovie } from "../mocks";

jest.mock("react-native-gesture-handler", () => ({
  Direction: {}
}));
const useEffectSpy = jest.spyOn(React, "useEffect");

describe("Home", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should render correctly", () => {
    useEffectSpy.mockImplementationOnce((f) => f());
    const component = shallow(<Home />);
    expect(mockAxios.get).toHaveBeenCalledWith("/discover/movie", {
      params: { sort_by: "popularity.desc" }
    });
    mockAxios.mockResponse({ data: { results: [mockMovie] } });
    expect(component.find("FlatList").prop("data")).toEqual([mockMovie]);
  });
});
