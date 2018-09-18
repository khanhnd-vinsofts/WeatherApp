import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, FlatList } from 'react-native'
import FirstHourWeather from './firstHourWeather';
import LineChart from './lineChartWeather';
import { getWeather } from '../../server';

const colors = {
    chartRed: 'rgba(255,255,0,1)',
    chartRedOpacity: 'rgba(255,228,196,0.4)',
}

export default class ViewTime extends Component {
 
        state = {
            width: 390,
            height: 100,
            list: [],
        }
    
    componentDidMount() {
        getWeather().then((res) => {
            const list = res.list.splice(0, 8);
            this.setState({
                list: list,
            })
        })

    }

    render() {
        const { width, height, list } = this.state;
        var chart = {
            values: [
                [26, 25, 24, 24, 23, 24, 25, 25],
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
            axis: [1, 2, 3, 4, 5, 6, 7, 8],
        }

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
                            <FlatList
                                style={{ top: 80, left: 15 }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={list}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => {
                                    const Temp = Math.ceil(item.main.temp - 273.15);
                                    return (
                                        <View style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            width: 52
                                        }}>
                                            <Text style={{ fontSize: 12, color: '#ffffff' }}>
                                                {Temp}°
                                            </Text>
                                        </View>
                                    )
                                }}
                            />
                            <View style={{ top: 75 }}>
                                <LineChart height={height} width={width} chart={chart} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Text style={{ left: 270, textDecorationLine: 'underline', color: 'orange', fontSize: 14, bottom: 10 }}>more detail</Text>
                <View style={{ flexDirection: 'row', marginLeft: 10, bottom: 7 }}>
                    <Text style={{ color: '#ffffff', fontSize: 10 }}>
                        <Image source={require('../../images/icon/ic_rain_probability.png')} style={{ width: 13, height: 13, }} />
                        Chance of rain</Text>
                    <Text style={{ color: '#ffffff', fontSize: 10, marginLeft: 20 }}>
                        <Image source={require('../../images/icon/ic_snow_probability.png')} style={{ width: 13, height: 13 }} />
                        Chance of snow</Text>
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
        marginTop: 22,
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
});

export { FirstHourWeather, LineChart };