import React from "react";
import { StyleSheet } from "react-native";
import Video from "react-native-video";

const VIDEO_URL =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Player: React.FC = () => {
  return (
    <Video
        source={{ uri: VIDEO_URL }}
        controls={true}
        style={styles.player}
        fullscreen={true}
    />
  );
};

const styles = StyleSheet.create({
  player: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#000"
  }
});

export default Player;
