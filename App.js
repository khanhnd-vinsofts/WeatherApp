
import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, ScrollView } from 'react-native';
import { ViewTime, ViewDetail, TemperatureNow, TemperatureDay,InputAddress } from './app/screens';

const image = require('./app/images/background/sleet_bg.jpg')
export default class App extends Component {
	render() {
		return (

			<View style={styles.container}>
				<ImageBackground
					style={{ width: '100%', height: '100%' }}
					source={uri = image}
				>
					<ScrollView
						showsHorizontalScrollIndicator={false}
						showsVerticalScrollIndicator={false}
					>
						<View style={styles.layout1}>
							<InputAddress />
						</View>
						<View style={styles.layout1}>
							<TemperatureNow />
						</View>
						<View style={styles.layout1}>
							<ViewTime />
						</View>
						<View style={styles.layout1}>
							<TemperatureDay />
						</View>
						<View style={styles.layout1}>
							<ViewDetail />
						</View>
					</ScrollView>
				</ImageBackground>
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
	layout1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}

});
