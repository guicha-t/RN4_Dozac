import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import Router from './src/Router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function App() {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    );
}