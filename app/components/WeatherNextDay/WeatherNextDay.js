import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import data from '../../server/HorizontalData.json';

export default class WeatherNextDay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [

            ],
        };
    }

    componentWillMount = () => {
        this.setState({
            data: data.weather_of_the_day,
        });
    }

    render() {
        return (
            <View style={styles.constainer}>
                <View style={{ height: 80 }}>
                    <View style={{ paddingTop: 7 }}>
                        <Text style={{ color: "#ffffff", fontSize: 12, textAlign: 'center', fontStyle: 'italic' }}>Chạm vào một ngày để xem dự báo theo giờ</Text>
                    </View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={{
                                    marginTop: 10,
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 70,
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        color: 'white',
                                        paddingHorizontal: 13,
                                        paddingVertical: 5,
                                        textDecorationLine: "underline",
                                        borderWidth: 1,
                                        borderColor: '#ffffff',
                                        borderRadius: 5,
                                        fontWeight: 'bold'
                                    }}>
                                        {item.the_day_of_weak}
                                    </Text>
                                    <View>
                                        <Image
                                            source={{ uri: item.icon }}
                                        />
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
