import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import api from '../../server/data';

export default class DetailWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
        main : [],
        mainHumi: '',
        mainChan: '',
        mainSea: '',
        mainWind: '',
        mainDew: '',
        mainClound: '',
        mainPress: '',
    };
  }

  componentDidMount(){
      api.getData().then((res) => {
          this.setState({
            main: res.main,
            mainTemp: res.main.humidity,
            mainChan: res.main.temp,
            mainSea: res.main.temp_min,
            mainWind: res.main.temp_max,
            mainDew: res.main.sea_level,
            mainClound: res.main.grnd_level,
            mainPress: res.main.pressure,
            windSpeed: res.wind.speed,
            windDeg: res.wind.deg,
            sysCoundtry: res.sys.country,
            sysMessage: res.sys.message
          })
      });
  }
  render() {
    return (
      <View style={styles.wrapper}> 
        <View style={styles.container}>
            <Text style={styles.text}>Humidity: {this.state.mainTemp}%</Text>
            <Text style={[styles.text, styles.text1]}>Chance of rain: {this.state.mainChan}%</Text>
            <Text style={[styles.text, styles.text1]}>Precipitation: {this.state.mainSea} mm</Text>
            <Text style={[styles.text, styles.text1]}>Wind child: {this.state.mainWind}</Text>
            <Text style={[styles.text, styles.text1]}>Dew point: {this.state.mainDew}</Text>
            <Text style={[styles.text, styles.text1]}>Clound cover: {this.state.mainClound} (Moderate)</Text>
            <Text style={[styles.text, styles.text1]}>Pressure: {this.state.mainPress} mbar</Text>
            <Text style={[styles.text, styles.text1]}>Speed: {this.state.windSpeed}</Text>
            <Text style={[styles.text, styles.text1]}>Deg: {this.state.windDeg}</Text>
            <Text style={[styles.text, styles.text1]}>Message: {this.state.sysMessage}</Text>
            <Text style={[styles.text, styles.text1]}>Country: {this.state.sysCoundtry}</Text>
        </View>
            <TouchableHighlight>
                <View style={styles.detailWeather}>
                    <Text style={{textDecorationLine: 'underline', color: 'tomato', fontSize: 14,}}>Details</Text>
                </View>
            </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1
    },
    text: {
        color: '#ffffff',
        fontSize: 14,
        top: 10,
        
    },
    text1: {
        marginTop: 10,
    },
    detailWeather: {
        marginBottom: 15,
        marginLeft: 210,
        
        
    }
})