import React, { useEffect, useState } from "react";
import { BaseResponse, Movie } from "../interfaces";
import { Alert, FlatList, StyleSheet } from "react-native";
import MovieTile from "../components/MovieTile";
import { api } from "../utils/api";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleError = (e: Error) => {
    Alert.alert(e.toString());
  };

  const renderItem = ({ item }) => {
    return <MovieTile movie={item} key={item.id} />;
  };

  useEffect(() => {
    api
      .get<BaseResponse<Movie[]>>("/discover/movie", {
        params: { sort_by: "popularity.desc" }
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch(handleError);
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={movies}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
});

export default Home;
