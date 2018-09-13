import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import FirstHourWeather from './firstHourWeather';
import LineChart from './lineChartWeather';

const colors = {
    chartRed: 'rgba(255,255,0,1)',
    chartRedOpacity: 'rgba(255,228,196,0.4)',
}

export default class ViewTime extends Component {
    constructor(props) {
        super(props);

        var chart = {
            values: [
                [28, 27, 25, 27, 29, 22, 19, 23, 24],
            ],
            colors: {
                labelsColor: [colors.chartRed],
                fillColor: [colors.chartRedOpacity],
                strokeColor: [colors.chartRed],

            },
            options: {
                margin: {
                    left: 20,
                    right: 0,
                    top: 10,
                    bottom: 20
                },
            },
            showAxis: false,
            axis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }



        this.state = {
            chart: chart,
            width: 450,
            height: 120
        }
    }

    render() {
        const { chart, width, height } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>24 Hour Next</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.layout}>

                        <View style={styles.layoutTop}>
                            <FirstHourWeather />
                        </View>
                        <View style={styles.layoutBottom}>
                            <LineChart height={height} width={width} chart={chart} />
                        </View>
                    </View>
                </ScrollView>
                    <Text style={{ left: 270, textDecorationLine: 'underline', color: 'orange', fontSize: 14, bottom: 10 }}>more detail</Text>
                    <View style={{  flexDirection: 'row', marginLeft: 10, bottom: 7 }}>
                        <Text style={{ color: '#ffffff', fontSize: 10 }}>
                            <Image source={require('../../images/icon/ic_rain_probability.png')} style={{ width: 13, height: 13, }} />
                            Khả năng có mưa</Text>
                        <Text style={{ color: '#ffffff', fontSize: 10, marginLeft: 20 }}>
                            <Image source={require('../../images/icon/ic_snow_probability.png')} style={{ width: 13, height: 13 }} />
                            Khả năng có tuyết</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '97%',
        height: 250,
        borderRadius: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginTop: 102,
    },
    text: {
        top: 3,
        left: 260,
        fontSize: 13,
        color: '#ffffff'
    },
    layout: {
        flex: 1,
    },
    layoutTop: {
        flex: 2,
    },
    layoutBottom: {
        flex: 3,
        top: 5
    }
});

export {FirstHourWeather, LineChart};