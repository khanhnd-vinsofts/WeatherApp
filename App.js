
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ViewBackgroundWeather from './app/screens';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <ViewBackgroundWeather  style={{flex: 1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
