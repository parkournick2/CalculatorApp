import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Display from "./components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

const App = () => {
  const [state, setState] = useState({ ...initialState });

  const addDigit = (number) => {
    
    const clearDisplay = state.displayValue === "0" || state.clearDisplay;
    if (number === "." && !clearDisplay && state.displayValue.includes(".")) {
      return null;
    }
    const currentValue = clearDisplay ? "" : state.displayValue;
    const displayValue = currentValue + number;
    if (number !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...state.values];
      values[state.current] = newValue;
      setState({ ...state, values, displayValue, clearDisplay: false });
    } else {
      setState({ ...state, displayValue, clearDisplay: false });
    }
  };

  const clearMemory = () => {
    setState(initialState);
  };

  const setOperation = (operation) => {
    if (state.current === 0) {
      setState({ ...state, operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "=";
      const values = [...state.values];
      try {
        values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`);
      } catch (error) {
        values[0] = state.values;
      }
      values[1] = 0;
      setState({
        ...state,
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  };

  return (
    <View style={style.container}>
      <Display value={state.displayValue} />
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
