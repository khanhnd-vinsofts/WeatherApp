import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getData } from '../../server';
import moment from 'moment';

export default class ViewTemperatureNow extends Component {
    state = {
        main: [],
        wind: [],
        weather: [],
    }

    componentDidMount() {
        getData().then((res) => {
            const list = res.list[0];
            this.setState({
                main: list.main,
                wind: list.wind,
                weather: list.weather[0],
            })
        })
    }

    render() {
        const {main, wind, weather } = this.state;
        const now = moment(currentDate).format('dddd DD-MM-YYYY');
        const currentDate = new Date();
        const time = moment(currentDate).format('H: MM');
        console.log(now);
        return (
            <View style={styles.wrapper}>
                <View style={styles.layout}>
                    <View style={styles.topTemperature}>
                        <View style={styles.dateTime}>
                            <Text style={styles.textDate}>{now}</Text>
                            <Text style={styles.textTime}>{time}</Text>
                        </View>
                        <View style={styles.temperature}>
                            <Text style={styles.textTemperature}>{main.temp}</Text>
                            <Text style={{color: "#ffffff", fontSize: 13, paddingTop:13}}>°C</Text>
                        </View>
                        <View style={styles.inforWeather}>
                            <Image style={styles.iconWeather} source={{uri: `http://openweathermap.org/img/w/${weather.icon}.png`}}></Image>
                            <Text style={{color: "#ffffff", fontSize: 12, textAlign: 'center', fontStyle: 'italic'}}>{weather.description}</Text>
                        </View>
                    </View>
                    <View style={styles.bottomTemperature}>
                        <Text style={styles.textBottomTemperature}>Tối đa: {main.temp_max}° Tối thiểu: {main.temp_min}°</Text>
                        <Text style={styles.textBottomTemperature}>Gió: {wind.speed}m/s</Text>
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
        width: '60%',
        height: '60%',
    }

})