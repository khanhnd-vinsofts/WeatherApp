import React, { Component } from 'react';
import { View,  TextInput, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import _ from 'lodash';
import { geocode } from '../../server';

export default class AddressIn extends Component {
    
    state = {
        text: '',
    }
    static defaultProps = {
        style: null,
        onError: _.noop,
        onSuccess: _.noop,
        onRequest: _.noop,
    }
    lookupGeo = (e) => {
        this.props.onRequest();
        const text = e.nativeEvent.text;

        geocode(text).then((res) => {
            if(res.results.length === 0) {
                this.props.onError(text);
            }else{
                const result = res.results[0];
                const address = {
                    name: result.formatted_address,
                    latitude: result.geometry.location.lat,
                    longitude: result.geometry.location.lng,
                };
                this.props.onSuccess(address);
            }
        });
    }

  render() {
    return (
      <TextInput 
          style={[styles.textInput, this.props.style]}
          onSubmitEditing={this.lookupGeo}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
          returnKeyType="go"
      />
    );
  }
}

AddressIn.propTypes = {
    style: PropTypes.number,
    onError: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onRequest: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        height: 50
    }
})
