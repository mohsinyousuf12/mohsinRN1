/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment }  from 'react';
//import { useEffect } from react;
import {AppRegistry,
  Dimensions,StatusBar
} from 'react-native';
import Splash from './pages/Splash';
import Signin from './pages/Signin';
import Forgot from './pages/Forgot';
import Signup from './pages/Signup';
import Account from './pages/Account';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
const InitialNavigator = createSwitchNavigator({
    Splash: {screen: Splash},
    Signin: {screen: Signin},
    Signup: {screen: Signup},
    Forgot: {screen: Forgot},
    Account: {screen: Account},

  },{  InitialRouteName: Splash });

           
    const AppConinor = createAppContainer(InitialNavigator);


  class App extends React.Component{
    componentDidMount() {
      StatusBar.setHidden(true);
      }
  render(){
  return( <AppConinor/> );}
} 
export default App;
AppRegistry.registerComponent('parallelspace', () => parallelspace);