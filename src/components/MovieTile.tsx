import React from "react";
import { Movie } from "../interfaces";
import { ImageBackground, StyleSheet, TouchableOpacity, Text } from "react-native";

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

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    height: 300,
    width: 200
  }
});

export default MovieTile;
