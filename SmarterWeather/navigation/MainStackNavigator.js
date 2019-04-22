import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../weather_project';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, {initialRouteName:"Home"});

export default HomeStack;
