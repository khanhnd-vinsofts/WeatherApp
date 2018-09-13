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
                        <Text style={styles.title}>Chạm vào một ngày để xem dự báo theo giờ</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.listData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={{
                                    marginTop: 10,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 55,
                                }}>
                                    <View style={{
                                        width: 50,
                                        height: 30,
                                        borderWidth: 1,
                                        borderColor: '#ffffff',
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 15,
                                            color: 'white',
                                            textDecorationLine: "underline",
                                        }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <Image style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 5
                                    }} source={item.image} resizeMode="contain"></Image>
                                    <Text style={{
                                        fontSize: 10,
                                        color: 'orange',
                                    }}>
                                        <Image
                                            style={{
                                                width: 13,
                                                height: 13,
                                            }}
                                            source={item.icon}
                                        />
                                        {item.ratio}%
                                    </Text>
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: 5,
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        height: 260
                                    }}>
                                        <Text style={{ fontSize: 12, color: "#ffffff", marginTop: 10, marginBottom: 7 }}>{item.max}°</Text>
                                        <View>
                                            <LinearGradients max={item.max} min={item.min}></LinearGradients>
                                        </View>
                                        <Text style={{ fontSize: 12, color: "#ffffff", marginTop: 10, marginBottom: 3 }}>{item.min}°</Text>
                                    </View>
                                </View>
                            );
                        }}
                    >

                    </FlatList>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <Text style={{ color: "orange", fontSize: 14, textDecorationLine: "underline", paddingRight: 10, paddingBottom: 2 }}>more details</Text>
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
    }
});
