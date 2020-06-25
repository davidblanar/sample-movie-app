import * as React from "react";
import { shallow } from "enzyme";
import { mockMovie } from "../mocks";
import Detail from "../../src/screens/Detail";

jest.mock("@react-navigation/native", () => ({
  useRoute: jest
    .fn()
    .mockImplementation(() => ({ params: { movie: mockMovie } }))
}));

describe("Detail", () => {
  it("should render correctly", () => {
    const component = shallow(<Detail />);
    expect(component.find("ScrollViewMock").exists()).toBe(true);
    expect(component.find("MovieBgImage").exists()).toBe(true);
    expect(component.find("Player").exists()).toBe(false);
    expect(component.find("Text").at(0).children().text()).toBe(
      mockMovie.overview
    );
    expect(component.find("Text").at(1).children().text()).toBe("PLAY");
  });

  it("should show player when clicking PLAY", () => {
    const component = shallow(<Detail />);
    component.find("ForwardRef").simulate("press");
    expect(component.find("Player").exists()).toBe(true);
  });
});
