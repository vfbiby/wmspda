import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
    <View>
      <Text>15336551131</Text>
    </View>
  ) : (
    <View>
      <Text>Username</Text>
      <TextInput onChangeText={() => {}} placeholder="Username" />
      <Text>Password</Text>
      <TextInput onChangeText={() => {}} placeholder="Password" />
      <Button
        title="Submit"
        onPress={() => {
          setIsLogin(true);
        }}
      />
    </View>
  );
};
