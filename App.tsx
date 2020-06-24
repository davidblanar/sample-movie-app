import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Alert
} from "react-native";
import { api } from "./src/utils/api";
import { BaseResponse, Movie } from "./src/interfaces";
import MovieTile from "./src/components/MovieTile";

const App = () => {
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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList data={movies} renderItem={renderItem} numColumns={2} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
