import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';

import getImageForWeather from './utils/getImageForWeather';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={[styles.largeText, styles.textStyle]}>
          Toulouse
        </Text>
        <Text style={[styles.smallText, styles.textStyle]}>
          Sunny
        </Text>
        <Text style={[styles.largeText, styles.textStyle]}>
          19°
        </Text>

        <SearchInput placeholder="Search any city" />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});
