// hiển thị backgroundImage theo thời tiết


import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default class ViewWeatherNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api?results=10');
      const json = await response.json();
      this.setState({ data: json.results })
    } catch (error) {
      console.log(error);
    }
  }

  _renderTest = () => {
    // let {data} = this.state;
    // if(data.length >0){
    //   return data.map( (val, key) =>{
    //     <Text key={key}>{`${val.name.first} ${val.name.last}`}</Text>
    //   })
    // }
    return null;
  }

  render() {
    return (
      <View style={styles.wrapper}>
          <View style={styles.layout}>
              <FlatList 
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) =>
                  <Text style={{color: '#ffffff'}}>
                    {`${item.name.first} ${item.name.last}`}
                  </Text>
                }
              />
              
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
    width: 350,
    height: 150,
    backgroundColor: '#000000',
    opacity: 0.5,
    borderRadius: 3,
  }
})
