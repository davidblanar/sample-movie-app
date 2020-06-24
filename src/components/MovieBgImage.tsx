import React from "react";
import { Movie } from "../interfaces";
import { ImageBackground, StyleSheet, Text } from "react-native";
import { getTileDimensions } from "../utils/dimensions";

interface Props {
  movie: Movie;
}

const MovieBgImage: React.FC<Props> = ({ movie }) => {
  return (
    <ImageBackground
      source={{ uri: `http://image.tmdb.org/t/p/w342${movie.poster_path}` }}
      style={styles.imageContainer}>
      <Text style={styles.text} numberOfLines={1}>
        {movie.title}
      </Text>
    </ImageBackground>
  );
};

const { width, height } = getTileDimensions();
const styles = StyleSheet.create({
  imageContainer: {
    resizeMode: "cover",
    justifyContent: "flex-end",
    height,
    width,
    margin: 6
  },
  text: {
    backgroundColor: "rgba(0, 0, 0, .7)",
    color: "#ffffff",
    padding: 3,
    fontSize: 16
  }
});

export default MovieBgImage;
