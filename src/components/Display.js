import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Display = (props) => {
  return (
    <View style={style.container}>
      <Text style={style.displayValue} numberOfLines={1}>{props.value}</Text>
    </View>
  );
};
export default Display;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "flex-end",
  },
  displayValue: {
    fontSize: 60,
    color: "#fff",
  },
});
