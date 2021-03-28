import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/home-screen';

const {Screen, Navigator} = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};
