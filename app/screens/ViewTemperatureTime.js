import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback,TextInput,StyleSheet, Dimensions } from 'react-native';
import FirstHourWeather from '../components/WeatherTimeToday/firstHourWeather';
import LineChart from '../components/WeatherTimeToday/lineChartWeather';

const colors = {
    chartRed:'#DC4437',
    chartRedOpacity:'rgba(255,228,196,1)',
  }

export default class ViewTemperatureTime extends Component {
     constructor(props) {
    super(props);

    var chart = {
      values: [
        [28,48,40,19,96,27,100],
      ],
      colors: {
        labelsColor : [colors.chartRed],
        fillColor : [colors.chartRedOpacity],
        strokeColor : [colors.chartRed],
        axisColor : 'rgba(216, 216, 216, 1)',
        axisTextColor: 'green',
      },
      options: {
        margin: {
            left: 40,
            right: 10,
            top: 10,
            bottom: 20
        },     
      },
      showAxis: false,
    	 axis: [1,2,3,4,5],
    }



    this.state = {
      chart : chart,
     }

  }

    render() {
        const {chart} = this.state;
        return (
            <View style= {styles.container}>
                <FirstHourWeather />
                <LineChart height={100} width={350} chart={chart} />
                
            </View>       
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });