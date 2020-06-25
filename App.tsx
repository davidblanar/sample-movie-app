import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Navigator from "./src/components/Navigator";
import BlueShort from "./src/assets/blue_short.svg";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.view}>
        <BlueShort style={styles.image} width={60} height={30} />
        <Navigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  image: {
    alignSelf: "center"
  }
});

export default App;
