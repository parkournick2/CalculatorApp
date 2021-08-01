import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  return(
    <TouchableHighlight onPress={props.onClick}>
      <Text style={style.button}>{props.label}</Text>
    </TouchableHighlight>
  );
}

export default Button;

const style = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#888",
    textAlign: "center",
  },
});
