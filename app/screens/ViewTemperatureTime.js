import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ViewWeatherNow from '../components/WeatherToday/ViewWeatherNow';


export default class ViewTemperatureTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
})