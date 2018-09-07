import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, processColor
} from 'react-native';
import update from 'immutability-helper';

import {LineChart} from 'react-native-charts-wrapper';

class LineChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {},
      legend: {
        enabled: true,
       
        textSize: 12,
        
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5,
       
      }
    };
  }

  componentDidMount() {
    this.setState(
      update(this.state, {
        data: {
          $set: {
            dataSets: [{
              values: [{y: 0.88}, {y: 0.77}, {y: 105}, {y: 135}],
              label: 'Company X',
              config: {
                lineWidth: 2,
                drawCircles: false,
                highlightColor: processColor('red'),
                color: processColor('red'),
                drawFilled: true,
                // fillColor: processColor('red'),
		        valueTextSize: 10,
              
              }
            }],
          }
        }
      })
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={this.state.data}
            
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  chart: {
    flex: 1
  }
});

export default LineChartScreen;