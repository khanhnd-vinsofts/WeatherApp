import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import {weather} from '../../server/HorizontalData';

class HorizontalFlatListItem extends Component {
    render() {
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

                    }}>{this.props.item.hour}</Text>
                </TouchableOpacity>
                <Image 
                    style={{
                        width: 20,
                        height: 20,
                        right: 3,
                        top: 25,
                        
                    }}
                    resizeMode= "contain"
                    source={this.props.item.uri}
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
                        resizeMode= "contain"
                        source={this.props.item.icon}
                    />
                    {this.props.item.ranny}%
                </Text>

            </View>
        );
    }
}

export default class FirstHourWeather extends Component { 

  render() {
    return (
            <View style={styles.constainer}>
                <View style={{ height: 80 }}>
                
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={weather}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>

                                </HorizontalFlatListItem>
                              
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
