import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class IconWeather extends Component {
 

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                style={{width:60, height: 60}}
                source={require('../../images/icon/ic_sun_max.png')}
            />
      </View>
    );
  }
}
