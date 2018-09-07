import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FirstHourWeather from '../components/WeatherTimeToday/firstHourWeather';
import LineChartScreen from '../components/WeatherTimeToday/lineChartWeather';

export default class ViewTemperatureTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.layout}>
                    <View style={styles.hourWeather}>
                       <FirstHourWeather />
                    </View>
                    <View style={styles.lineChartWeather}>
                        <LineChartScreen />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,     
    },
    layout: {
        marginTop: 102,
        width: 350,
        height: 250,
        borderRadius: 3,
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
       
        
    },
    hourWeather: {
        flex: 1,  
    },
    lineChartWeather: {
        flex: 2, 
        
    }
})