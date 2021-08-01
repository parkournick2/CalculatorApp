import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  const [displayValue, setDisplayValue] = useState(0);

  const addDigit = (number) => {
    setDisplayValue(number);
  };

  const clearMemory = () => {
    setDisplayValue(0);
  };

  const setOperation = (operation) => {};

  return (
    <View style={style.container}>
      <Display value={displayValue} />
      <View style={style.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={setOperation} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default App;
