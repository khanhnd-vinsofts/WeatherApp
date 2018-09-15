import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {getData} from '../../server';

export default class IconWeather extends Component {
 state = {
   weather: [],
 }
 componentDidMount() {
   getData().then((res) => {
     const list = res.list[0];
     this.setState({
       weather: list.weather[0],
     })
   })
 }
  render() {
    const {weather} = this.state;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                style={{width:60, height: 60}}
                source={{uri: `http://openweathermap.org/img/w/${weather.icon}.png`}}
            />
      </View>
    );
  }
}
