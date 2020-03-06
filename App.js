/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button from './src/components/Button';
import Display from './src/components/Display';

const initialSate = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}


export default class App extends Component {

  state = { ...initialSate }

  addDigit = n => {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay

    const currentValue = clearDisplay ? '' : this.state.displayValue

    const displayValue = current + n

    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
    }

  }
  clearMemory = () => {

    this.setState({ ...initialSate })
  }
  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '=';
      const values = [...this.state.values]
      try {
        values[0] =
          eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }
      values[1] = 0
      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay : !equals,
        values,
      })
    }
  }
}
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Display value={this.state.displayValue} />
      <View style={styles.button}>
        <Button label='AC' triple onCLick={this.clearMemory} />
        <Button label='/' operation onCLick={() => this.setOperation} />
        <Button label='7' onCLick={addDigit} />
        <Button label='8' onCLick={addDigit} />
        <Button label='9' onCLick={addDigit} />
        <Button label='*' operation onCLick={() => this.setOperation} />
        <Button label='4' onCLick={addDigit} />
        <Button label='5' onCLick={addDigit} />
        <Button label='6' onCLick={addDigit} />
        <Button label='-' operation={() => this.setOperation} />
        <Button label='1' onCLick={addDigit} />
        <Button label='2' onCLick={addDigit} />
        <Button label='3' onCLick={addDigit} />
        <Button label='+' operation onCLick={() => this.setOperation} />
        <Button label='0' double onCLick={addDigit} />
        <Button label='.' onCLick={() => this.addDigit} />
        <Button label='=' operation onCLick={() => this.setOperation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default App;
