import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={style.MainContainer}>
      <Text style={style.Title}>Hello World</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  MainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    backgroundColor: "#6495ED",
  },
  Title: {
    fontSize: 30,
  }
});

export default App;
