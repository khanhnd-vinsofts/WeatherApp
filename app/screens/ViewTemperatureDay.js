import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import WeatherNextDay from '../components/WeatherNextDay/WeatherNextDay';

export default class ViewTemperatureDay extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.temperatureDay}>
                    <WeatherNextDay></WeatherNextDay>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    temperatureDay: {
        width: 350,
        height: 250,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 3,
        flexDirection: 'column',
        marginTop: 13,
    }
})