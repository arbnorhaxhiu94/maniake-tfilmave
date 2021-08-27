/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  LogBox
} from 'react-native';
import { background_black_color } from './src/assets/colors';
import MyDrawer from './src/navigation/MyDrawer';
import AuthScreen from './src/screens/AuthScreens/AuthScreen';
import DeviceInfo from 'react-native-device-info';
import { setDeviceId } from './src/configs/device_id';


class App extends Component {
  constructor(props) {
    super(props)
    LogBox.ignoreLogs(['Reanimated 2'])
  }

  componentDidMount() {
    setDeviceId(DeviceInfo.getDeviceId())
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar 
          backgroundColor={background_black_color} 
          barStyle={'light-content'} />
        <MyDrawer />
        {/* <AuthScreen /> */}
      </SafeAreaView>
    );
  }
};

export default App;
