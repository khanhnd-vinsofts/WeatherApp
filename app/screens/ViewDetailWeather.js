import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconWeather from '../components/WeatherDetails/iconWeather'
import DetailWeather from '../components/WeatherDetails/detailWeather'

export default class ViewDetailWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.layout}>
                    <View style={styles.leftIcon}>
                        <IconWeather />
                    </View>
                    <View style={styles.rightDetail}>
                        <DetailWeather />
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
        // marginTop: 102,
        width: 350,
        height: 350,
        borderRadius: 3,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
        top: 13
    },
    leftIcon: {
        flex: 1,
       
    },
    rightDetail: {
        flex: 3,
        
    }
   
})