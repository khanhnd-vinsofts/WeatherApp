import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import {weather, getWeather} from '../../server';


export default class FirstHourWeather extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           list: []
            
        }
    }
    componentDidMount() {
        getWeather().then((res) => {
            this.setState({
                list: res.list,
            })
        })
    }
    render() {
        // const {dt_txt, weather} = this.state;
        // console.log(weather, 'sdsdsdsdsd');
        return (
            <View style={styles.constainer}>
                <View style={{ height: 80 }}>

                    <FlatList

                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.list}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            // console.log(item.dt_txt);
                            const date = item.dt_txt.substring(11, 16);
                            let weatherItem = weather[index%weather.length];
                            // console.log({uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`});
                            return (
                       
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        width: 52,

                                    }}>
                                    <TouchableOpacity
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: 13,
                                            color: 'white',
                                            top: 5,
                                            left: 7

                                        }}>{date}</Text>
                                    </TouchableOpacity>
                                   
                                    <Image
                                        style={{
                                            width: 30,
                                            height: 30,
                                            right: 3,
                                            top: 25,

                                        }}
                                        resizeMode="contain"
                                        source={{uri: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`}}
                                    />
                                    <Text style={{
                                        fontSize: 9,
                                        color: 'white',
                                        right: 3,
                                        top: 25
                                    }}>
                                        <Image
                                            style={{
                                                width: 13,
                                                height: 13,
                                            }}
                                            resizeMode="contain"
                                            source={weatherItem.icon}
                                        />
                                        {item.clouds.all}%
                </Text>

                                </View>

                            )
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
    },

});
