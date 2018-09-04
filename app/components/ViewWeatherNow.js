import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ViewWeatherNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getData(){
    return fetch('https://www.reddit.com/r/javascript/top/.json?limit=5')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.wrapper}>
          <View style={styles.layout}>

          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  layout: {
    width: 300,
    height: 150,
    backgroundColor: '#000000',
    opacity: 0.3,
    borderRadius: 3,
  }
})
