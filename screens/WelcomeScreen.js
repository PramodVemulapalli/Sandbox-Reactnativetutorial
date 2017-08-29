import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';


const SLIDE_DATA = [
  { text: 'Select a Location', color: '#03A9F4' },
  { text: 'Search for jobs in that location', color: '#009688'},
  { text: 'Pick from those jobs and apply', color: '#03A9F4' }
];

class WelcomeScreen extends Component {

  state = { token: null };

  async componentWillMount() {

    let token = await AsyncStorage.getItem('fb_token');
    console.log('here is the token');
    console.log(token);
    if (token) {
      await AsyncStorage.removeItem('fb_token');
      this.props.navigation.navigate('mapscr');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render() {
    if (_.isNull(this.state.token)) {
      console.log("App Loading");
      return <AppLoading />;
    }
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    );
  }


}

export default WelcomeScreen;
