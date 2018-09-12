import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import getData from '../server/currentWeatherData';
export default class ViewTemperatureNow extends Component {
    state = {
        main: [],
        wind: []
    }

    componentDidMount() {
        getData().then((res) => {
            const list = res.list[0];
            this.setState({
                main: list.main,
                wind: list.wind
            })
        })
    }

    render() {
        const {main, wind} = this.state;
        console.log(this.state.main);
        return (
            <View style={styles.wrapper}>
                <View style={styles.layout}>
                    <View style={styles.topTemperature}>
                        <View style={styles.dateTime}>
                            <Text style={styles.textDate}>Th 4 05-09-2018</Text>
                            <Text style={styles.textTime}>14: 30</Text>
                        </View>
                        <View style={styles.temperature}>
                            <Text style={styles.textTemperature}>{main.temp}</Text>
                            <Text style={{color: "#ffffff", fontSize: 13, paddingTop:13}}>°F</Text>
                        </View>
                        <View style={styles.inforWeather}>
                            <Image style={styles.iconWeather} source={require('../images/icon/ic_sun_max.png')}></Image>
                            <Text style={{color: "#ffffff", fontSize: 12, textAlign: 'center', fontStyle: 'italic'}}>Ẩm ướt & Trời nhiều mây</Text>
                        </View>
                    </View>
                    <View style={styles.bottomTemperature}>
                        <Text style={styles.textBottomTemperature}>Tối đa: {this.state.temp_max}° Tối thiểu: {this.state.temp_min}°</Text>
                        <Text style={styles.textBottomTemperature}>Gió: {this.state.wind_speed}m/s</Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
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