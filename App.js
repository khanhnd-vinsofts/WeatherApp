
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Index from './app/screens/index';

export default class App extends Component {
  render() {
    return (
      
      <View style={styles.container}>
          <Index  style={{flex: 1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
