import { getTileDimensions } from "../../src/utils/dimensions";

jest.mock("react-native", () => ({
  Dimensions: {
    get: jest.fn().mockImplementation(() => ({ width: 1000 }))
  }
}));

describe("dimensions", () => {
  it("should calculate tile size", () => {
    const result = getTileDimensions();
    expect(result.width).toBe(450);
    expect(result.height).toBe(675);
  });
});
