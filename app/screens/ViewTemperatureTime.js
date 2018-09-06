import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FirstHourWeather from '../components/WeatherTimeToday/firstHourWeather';
import LineChartWeather from '../components/WeatherTimeToday/lineChartWeather';


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
        height: 200,
        borderRadius: 3,
        flexDirection: 'column',
        backgroundColor: '#000000',
        opacity: 0.35,
        
    },
    hourWeather: {
        flex: 1,    
        
    },
    lineChartWeather: {
        flex: 2,    
    }
})