import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class ViewTemperatureNow extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.layout}>
                    <View style={styles.topTemperature}>
                        <View style={styles.dateTime}>
                            <Text style={styles.textDate}>Th 4 05-09-2018</Text>
                            <Text style={styles.textTime}>14: 30</Text>
                        </View>
                        <View style={styles.temperature}>
                            <Text style={styles.textTemperature}>35</Text>
                            <Text style={{color: "#ffffff", fontSize: 13, paddingTop:13}}>°C</Text>
                        </View>
                        <View style={styles.inforWeather}>
                            <Image style={styles.iconWeather} source={require('../images/icon/ic_sun_max.png')}></Image>
                            <Text style={{color: "#ffffff", fontSize: 12, textAlign: 'center', fontStyle: 'italic'}}>Ẩm ướt & Trời nhiều mây</Text>
                        </View>
                    </View>
                    <View style={styles.bottomTemperature}>
                        <Text style={styles.textBottomTemperature}>Tối đa: 99° Tối thiểu: 2°</Text>
                        <Text style={styles.textBottomTemperature}>Gió: Đông 2 km/h</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 90,
    },
    layout: {
        width: 350,
        height: 150,
        backgroundColor: '#000000',
        opacity: 0.5,
        borderRadius: 3,
        flexDirection: 'column',
    },
    topTemperature: {
        flex: 2,
        flexDirection: 'row',
    },
    bottomTemperature: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBottomTemperature: {
        color: '#ffffff',
    },
    dateTime: {
        marginTop: 15,
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textDate: {
        color: "#ffffff",
        fontSize: 15,
    },
    textTime: {
        color: "#ffffff",
        fontSize: 35,
    },
    temperature: {
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textTemperature: {
        color: "#ffffff",
        fontSize: 75,
    },
    inforWeather: {
        flex: 2,
        alignItems: 'center',
        paddingTop: 10,
    },
    iconWeather: {
        width: 55,
        height: 55,
    }

})