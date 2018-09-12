import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import getData from '../../server/data';

export default class DetailWeather extends Component {
    state = {
        sys: [],
        main: [],
        wind: [],
        cloud: [],
    }
  componentDidMount(){
      getData().then((res) => {
        const list = res.list[0];
          this.setState({
            main: list.main,
            sys: list.sys,
            wind: list.wind,
            cloud: list.clouds
          })
      });
    
  }
  render() {
      const {main, wind, sys, cloud} = this.state;
    return (
      <View style={styles.wrapper}> 
        <View style={styles.container}>
            <Text style={styles.text}>Humidity: {main.humidity || ""}%</Text>
            <Text style={[styles.text, styles.text1]}>Cloud cover: {cloud.all} (Moderate)</Text>
            <Text style={[styles.text, styles.text1]}>Pressure: {main.pressure} mbar</Text>
            <Text style={[styles.text, styles.text1]}>Speed: {wind.speed}</Text>
            <Text style={[styles.text, styles.text1]}>Deg: {wind.deg}</Text>
            <Text style={[styles.text, styles.text1]}>Country: {sys.country}</Text>
        </View>
            {/* <TouchableHighlight>
                <View style={styles.detailWeather}>
                    <Text style={{textDecorationLine: 'underline', color: 'orange', fontSize: 14,}}>Details</Text>
                </View>
            </TouchableHighlight> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        left: 15
    },
    text: {
        color: '#ffffff',
        fontSize: 13,
        top: 20,
        
    },
    text1: {
        marginTop: 10,
    },
    detailWeather: {
        marginBottom: 15,
        marginLeft: 210,
        
        
    }
})