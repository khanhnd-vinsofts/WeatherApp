import React, { Component } from 'react';
import { View, TextInput, StyleSheet, ActivityIndicator } from 'react-native';

export default class InputAddress extends Component {
    // state = {
    //     requesting: false,
    //     error: null,
    // }
    render() {
        return (
            <View style={styles.constainer}>
                <View style={styles.content}>
                    <TextInput
                        style={{ height: 40, backgroundColor: 'rgba(0, 0, 0, 0.2)', color: '#ffffff' }}
                    />
                    {/* {this.state.error != null ? (
                        <Text>Could not find address for: {this.state.error}</Text>
                    ) : null} */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '97%',
        height: 250,
        borderRadius: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginTop: 102,
    },

    content: {
        width: 260,
        height: 50,
        marginLeft: 25,
    },

})