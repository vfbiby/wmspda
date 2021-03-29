import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/home-screen';
import {WavePick} from '../screens/wave-pick/wave-screen';

const {Screen, Navigator} = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen
        options={{title: '首页', headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Screen
        name="WavePick"
        options={{title: '波次拣货'}}
        component={WavePick}
      />
    </Navigator>
  );
};
