import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class WeatherNextDay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {
                    name: "TH 2",
                    image: require('../../images/icon/ic_fog_max.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 11
                },
                {
                    name: "TH 3",
                    image: require('../../images/icon/ic_partly_cloudy_day_max.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 90
                },
                {
                    name: "TH 4",
                    image: require('../../images/icon/ic_sun_min.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 98
                },
                {
                    name: "TH 5",
                    image: require('../../images/icon/ic_sun_min.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 76
                },
                {
                    name: "TH 6",
                    image: require('../../images/icon/ic_partly_cloudy_day_max.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 9
                },
                {
                    name: "TH 7",
                    image: require('../../images/icon/ic_five_star.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 12
                },
                {
                    name: "CN",
                    image: require('../../images/icon/ic_sun_min.png'),
                    icon: require('../../images/icon/ic_rain_probability.png'),
                    ratio: 14
                }
            ]
        };
    }

    render() {
        return (
            <View style={styles.constainer}>
                <View>
                    <View style={{ paddingTop: 7 }}>
                        <Text style={{ color: "#ffffff", fontSize: 12, textAlign: 'center', fontStyle: 'italic' }}>Chạm vào một ngày để xem dự báo theo giờ</Text>
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
                                            fontWeight: 'bold'
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
                                        fontSize: 9,
                                        color: 'white',
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
                                    }}>
                                        <Text>11</Text>
                                        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{width: 5, height: 10}}></LinearGradient>
                                        <Text>0</Text>
                                    </View>
                                </View>
                            );
                        }}
                    >

                    </FlatList>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        flexDirection: 'column',
    }
});
