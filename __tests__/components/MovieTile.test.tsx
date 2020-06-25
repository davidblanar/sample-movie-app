import React from "react";
import { shallow } from "enzyme";
import { mockMovie } from "../mocks";
import MovieTile from "../../src/components/MovieTile";
import { Routes } from "../../src/components/Navigator";

jest.mock("react-native-gesture-handler", () => ({
  Direction: {}
}));
const mockNavigate = jest.fn();
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: jest
      .fn()
      .mockImplementation(() => ({ navigate: mockNavigate }))
  };
});

describe("MovieTile", () => {
  it("should render correctly", () => {
    const component = shallow(<MovieTile movie={mockMovie} />);
    expect(component.find("MovieBgImage").exists()).toBe(true);
  });

  it("should should navigate", () => {
    const component = shallow(<MovieTile movie={mockMovie} />);
    component.find("ForwardRef").simulate("press");
    expect(mockNavigate).toHaveBeenCalledWith(Routes.DETAIL, {
      movie: mockMovie
    });
  });
});
