import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import ViewWeatherNow from '../components/ViewWeatherNow';


const image = require('../images/clear_day_bg.jpg')
export default class ViewBackgroundWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground
        style={{width:'100%', height: '100%'}}
        source={uri = image}
      >
        <ViewWeatherNow />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
})