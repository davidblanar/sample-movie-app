import { Dimensions } from "react-native";

export const getTileDimensions = () => {
  const { width } = Dimensions.get("screen");
  const tileWidth = width * 0.45;
  const tileHeight = tileWidth * 1.5;
  return {
    width: tileWidth,
    height: tileHeight
  };
};
