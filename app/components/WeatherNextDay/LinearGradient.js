import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class LinearGradients extends Component {
    render() {
        const max = this.props.max;
        const min = this.props.min;
        return(
            <View style={{
                flexDirection: 'column',
                justifyContent: 'flex-end'
            }}>
                <LinearGradient colors={['#ffff00', '#66ff33',]} style={{ width: 11, height: (max-min)*20, borderRadius: 11}}></LinearGradient>
            </View>
        )
    }
}