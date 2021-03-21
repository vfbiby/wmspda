import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export const App = () => {
  return (
    <View>
      <Text>Username</Text>
      <TextInput onChangeText={() => {}} placeholder="Username" />
      <Text>Password</Text>
      <TextInput onChangeText={() => {}} placeholder="Password" />
      <Button title="Submit" onPress={() => {}} />
    </View>
  );
};
