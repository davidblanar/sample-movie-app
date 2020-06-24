import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Navigator from "./src/components/Navigator";

// TODO api attribution image (github)
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.view}>
        <Navigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
});

export default App;
