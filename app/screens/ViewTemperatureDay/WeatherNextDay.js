import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import LinearGradients from './LinearGradient';

export default class WeatherNextDay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {
                    name: "TH 2",
                    image: require('../../images/icon/ic_fog_max.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 11,
                    max: 29,
                    min: 21
                },
                {
                    name: "TH 3",
                    image: require('../../images/icon/ic_partly_cloudy_day_max.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 90,
                    max: 31,
                    min: 22
                },
                {
                    name: "TH 4",
                    image: require('../../images/icon/ic_sun_min.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 98,
                    max: 31,
                    min: 22
                },
                {
                    name: "TH 5",
                    image: require('../../images/icon/ic_sun_min.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 76,
                    max: 31,
                    min: 22

                },
                {
                    name: "TH 6",
                    image: require('../../images/icon/ic_partly_cloudy_day_max.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 9,
                    max: 32,
                    min: 23
                },
                {
                    name: "TH 7",
                    image: require('../../images/icon/ic_five_star.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 12,
                    max: 31,
                    min: 23
                },
                {
                    name: "CN",
                    image: require('../../images/icon/ic_sun_min.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 14,
                    max: 30,
                    min: 23
                }
            ]
        };
    }

    render() {
        return (
            <View style={styles.constainer}>
                <View>
                    <View style={{ paddingTop: 7 }}>
                        <Text style={styles.title}>Touch a day to see forecast by hourly</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.listData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.viewDay}>
                                    <View style={styles.weekDays}>
                                        <Text style={styles.textWeekDays}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <Image style={styles.iconWeather} source={item.image} resizeMode="contain"></Image>
                                    <Text style={styles.textHumidity}>
                                        <Image
                                            style={styles.imageHumidity}
                                            source={item.icon}
                                        />
                                        {item.ratio}%
                                    </Text>
                                    <View style={styles.viewGradients}>
                                        <Text style={styles.textTemperature}>{item.max}°</Text>
                                        <View>
                                            <LinearGradients max={item.max} min={item.min}></LinearGradients>
                                        </View>
                                        <Text style={styles.textTemperature}>{item.min}°</Text>
                                    </View>
                                </View>
                            );
                        }}
                    >

                    </FlatList>
                    <View style={styles.viewDetail}>
                        <Text style={styles.textDetail}>more details</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        color: "#ffffff",
        fontSize: 12,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    viewDay: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        width: 75,
    },
    weekDays: {
        width: 65,
        height: 35,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWeekDays: {
        fontSize: 15,
        color: 'white',
        textDecorationLine: "underline",
    },
    iconWeather: {
        width: 20,
        height: 20,
        marginTop: 5
    },
    textHumidity: {
        fontSize: 10,
        color: 'orange',
    },
    imageHumidity: {
        width: 13,
        height: 13,
    },
    viewGradients: {
        alignItems: 'center',
        marginTop: 5,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: 260
    },
    textTemperature: {
        fontSize: 12,
        color: "#ffffff",
        marginTop: 10,
        marginBottom: 7
    },
    viewDetail: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textDetail: {
        color: "orange",
        fontSize: 14,
        textDecorationLine: "underline",
        paddingRight: 10,
        paddingBottom: 5
    }
});
