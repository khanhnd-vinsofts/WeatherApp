import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import IconWeather from './iconWeather'
import DetailWeather from './detailWeather'
export default class ViewDetail extends Component {

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
        height: 200,
        borderRadius: 3,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
        top: 13
    },
    leftIcon: {
        flex: 1,
       
    },
    rightDetail: {
        flex: 3,
        
    }
   
})
