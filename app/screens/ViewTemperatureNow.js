import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import ViewWeatherNow from '../components/WeatherToday/ViewWeatherNow';

const image = require('../images/background/clear_day_bg.jpg');

export default class ViewTemperatureNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
          <View style={styles.layout}>

              <ViewWeatherNow />
          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      top: 90
    },
    layout: {
      width: 350,
      height: 150,
      backgroundColor: '#000000',
      opacity: 0.5,
      borderRadius: 3,
    }
    
})