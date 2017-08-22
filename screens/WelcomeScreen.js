import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';


const SLIDE_DATA = [
  { text: 'We get our partner restaurants to cook fresh, healthy, food everyday', color: '#03A9F4' },
  { text: 'We refrigerate the food and get it from our partners on the same day', color: '#009688'},
  { text: 'We deliver it to your office before 5 PM on the same day so that you donot have to worry about dinner', color: '#03A9F4' }
];

class WelcomeScreen extends Component {

  state = { token: null };

  async componentWillMount() {

    let token = await AsyncStorage.getItem('fb_token');
    console.log('here is the token');
    console.log(token);
    if (token) {
      // await AsyncStorage.removeItem('fb_token');
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
