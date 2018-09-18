import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
// import PropTypes from 'prop-types';
import AddressIn from './AddressInput';

export default class AddressPage extends Component {
    state = {
        requesting: false,
        error: null,
    }
    // onSuccess = (...args) => {
    //     this.props.onAddressSet(...args);
    // }

    showError = (text) => {
        this.setState({
            error: text,
            requesting: false,
        })
    }
    showActivity = () => {
        this.setState({
            error: null,
            requesting: true,
        });
    }
    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <AddressIn 
                        onRequest={this.showActivity}
                        onSuccess={this.onSuccess}
                        onError={this.showError}
                    />
                    <ActivityIndicator
                        animating={this.state.requesting}
                        style={styles.activity}
                        size="large"
                    />
                    {this.state.error != null ? (
                        <Text>Could not find address for: {this.state.error}</Text>
                    ) : null}
                </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        width: '97%',
        height: 90,
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    content: {
        flex: 1,
        marginLeft: 60,
    }

})

// AddressPage.propTypes = {
//     onAddressSet: PropTypes.func.isRequired,
// }
