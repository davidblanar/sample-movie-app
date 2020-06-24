import React from "react";
import { Movie } from "../interfaces";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions
} from "react-native";

interface Props {
  movie: Movie;
}

const MovieTile: React.FC<Props> = ({ movie }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={{ uri: `http://image.tmdb.org/t/p/w342${movie.poster_path}` }}
        style={styles.image}>
        <Text>{movie.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("screen");
const tileWidth = width * 0.45;
const tileHeight = tileWidth * 1.5;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    height: tileHeight,
    width: tileWidth,
    margin: 10
  }
});

export default MovieTile;
