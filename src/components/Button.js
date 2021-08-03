import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

const Button = (props) => {
  const styleButton = [style.button];
  if (props.double) {
    styleButton.push(style.buttonDouble);
  }
  if (props.triple) {
    styleButton.push(style.buttonTriple);
  }
  if (props.operation) {
    styleButton.push(style.operationButton);
  }
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={styleButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};

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
  operationButton: {
    color: "#fff",
    backgroundColor: "#fa8231",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  },
});
