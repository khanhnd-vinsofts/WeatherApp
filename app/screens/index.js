import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import ViewTemperatureNow from './ViewTemperatureNow';
import ViewTemperatureTime from './ViewTemperatureTime';
import ViewTemperatureDay from './ViewTemperatureDay';

const image = require('../images/background/clear_day_bg.jpg')
export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (

			<ImageBackground
				style={{ width: '100%', height: '100%' }}
				source={uri = image}
			>
				<ScrollView
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.layout1}>
						<ViewTemperatureNow />
					</View>
					<View style={styles.layout1}>
						<ViewTemperatureTime />
					</View>
					<View>
						<ViewTemperatureDay></ViewTemperatureDay>
					</View>
				</ScrollView>
			</ImageBackground>

		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},

	layout1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})