import React from 'react';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, ImageBackground } from 'react-native';

import getImageForWeather from './utils/getImageForWeather';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: 'Toulouse',
    };
  }

  handleUpdateLocation = city => {
    this.setState({location: city,});
  };

  render() {
    const {location} = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>
              {location}
            </Text>
            <Text style={[styles.smallText, styles.textStyle]}>
              Sunny
            </Text>
            <Text style={[styles.largeText, styles.textStyle]}>
              19°
            </Text>

            <SearchInput 
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  detailsContainer: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0,2)',
    paddingHorizontal: 20,
  }
});
