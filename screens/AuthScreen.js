import React, { Component } from 'react';
import { View, Text, AsyncStorage, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {

    if ( Platform.OS === 'ios' ) {
      // this.props.facebookLogin();
      this.props.dummyLogin();
    }
    if ( Platform.OS === 'android' ) {
      this.props.dummyLogin();
    }
    this.onAuthComplete(this.props);

  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('mapscr');
    }
  }

  render() {
    return (
      <View />
    );
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
