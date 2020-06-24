import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Movie } from "../interfaces";
import Home from "../screens/Home";

export enum Routes {
  HOME = "HOME",
  DETAIL = "DETAIL"
}

export type RootStackParamList = {
  [Routes.HOME]: {};
  [Routes.DETAIL]: { movie: Movie };
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
