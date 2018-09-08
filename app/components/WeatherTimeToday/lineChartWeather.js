import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import d3 from 'd3';
import Svg from 'react-native-svg';

export default class LineChartWeather extends Component {
  getValueDomain = () => {
    var _max = [];
    var _min = [];
    this.props.data.map((item, index) => {
      _max.push(d3.max(item));
      _min.push(d3.min(item));
    });
    return [d3.max(_max), d3.min(_min)];
  }
  getPathD = (data) => {
    var x = d3.scale.linear().domain([0, data.length - 1]).range([6, this.props.width - 6]);
    var y = d3.scale.linear().domain(this.getValueDomain()).range([6, this.props.height - 6]);
    var line = d3.svg.line().x(function(d,i) { 
            return x(i); 
        }).y(function(d) { 
            return y(d);
        })
    .interpolate("cardinal");
    return line(data);
  }
  paths = () => {
    var that = this;
    return this.props.data.map((item, index) => {
      return (
        <Path fill="none" stroke={that.props.lineColors[index]} strokeWidth="2" strokeMiterlimit="10"
          d={that.getPathD(item)} />);
    });
  }
  points = () => {
    var that = this;
    if(this.props.data.length > 1){
      var x = d3.scale.linear().domain([0, this.props.data[0].length - 1]).range([6, this.props.width - 6]);
      var y = d3.scale.linear().domain(this.getValueDomain()).range([6, this.props.height - 6]);
      var paths = [];
      this.props.data.map((item, index) => {
        item.map((point, _index) => {
          var cx = x(_index);
          var cy = y(point);
          var d = "M " + cx + " " + cy + " m -3,0 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0";
          paths.push(<Path fill={that.props.pointFillColors[index]} 
                      stroke={that.props.pointStrokeColors[index]} 
                      strokeWidth="1" strokeMiterlimit="10" 
                      d={d} />);
        });
      });
      return paths;
    }
  }
  svg = () => {
    return (<Svg width={this.props.width} height={this.props.height} forceUpdate="0" 
            style={{
                width: this.props.width, 
                height: this.props.height,}}>
            {this.paths()}
            {this.points()}
        </Svg>);
  }
  render() {
    if(this.props.data){
      return(
        <View style={{
                  position: 'absolute',
                  backgroundColor:'transparent',
                  top: this.props.top,
                }}>
          {this.svg()}
        </View>);
    }else{
      return(
        <View style={{
                  position: 'absolute',
                  backgroundColor:'transparent',
                  top: this.props.top,
                }}>
        </View>);
    }
  }
}