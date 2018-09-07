import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import data from '../../server/HorizontalData.json';



export default class FirstHourWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          dataSource: [],
        };
      }
      componentWillMount() {
        this.setState({
            isLoading: false,
            dataSource: data.weather,
        });
      }
    
  render() {
        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={styles.constainer}>
                <Text style={styles.text}>24 Hour Next</Text>
                <View style={{ height: 80 }}>
                
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.dataSource}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 60,
                                    right: 5

                                }}>
                                    <Text style={{
                                        fontSize: 13,                                     
                                        color: 'white',
                                        margin: 5,
                                        top: 2
                                    }}>
                                        {item.hour}
                                    </Text>
                                    <Text style={{
                                        fontSize: 13,
                                        color: 'white',
                                        margin: 2
                                    }}>
                                        {item.uri}
                                    </Text>
                                    <Text style={{
                                        fontSize: 13,
                                        color: 'white',
                                        margin: 2
                                    }}>
                                        {item.icon}
                                    </Text>
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
    },
    text: {
        top:3,
        left:263,
        fontSize: 14,
        color: '#ffffff'
    }
});
