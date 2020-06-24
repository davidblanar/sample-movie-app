import React, { useState } from "react";
import { RouteProp } from "@react-navigation/core";
import { Routes, StackParamList } from "../components/Navigator";
import { useRoute } from "@react-navigation/native";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import MovieBgImage from "../components/MovieBgImage";
import Player from "../components/Player";

type RouteProps = RouteProp<StackParamList, Routes.DETAIL>;

const Detail: React.FC = () => {
  const route = useRoute<RouteProps>();
  const { movie } = route.params;
  const [showPlayer, setShowPlayer] = useState(false);

  const onPress = () => setShowPlayer(true);

  return (
    <ScrollView contentContainerStyle={styles.view}>
      <MovieBgImage movie={movie} />
      <View style={styles.innerView}>
        <Text>{movie.overview}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>PLAY</Text>
        </TouchableOpacity>
      </View>
      {showPlayer && <Player />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  innerView: {
    padding: 20,
    flex: 1,
    alignItems: "center"
  },
  button: {
    width: 150,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007bff",
    fontSize: 24
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center"
  }
});

export default Detail;
