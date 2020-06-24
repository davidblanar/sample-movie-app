import React from "react";
import { Movie } from "../interfaces";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "./Navigator";
import MovieBgImage from "./MovieBgImage";

interface Props {
  movie: Movie;
}

const MovieTile: React.FC<Props> = ({ movie }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(Routes.DETAIL, { movie });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <MovieBgImage movie={movie} />
    </TouchableOpacity>
  );
};

export default MovieTile;
