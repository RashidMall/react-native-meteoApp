import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.largeText, styles.textStyle]}>
          Toulouse
        </Text>
        <Text style={[styles.smallText, styles.textStyle]}>
          Sunny
        </Text>
        <Text style={[styles.largeText, styles.textStyle]}>
          19°
        </Text>
      </View>
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
