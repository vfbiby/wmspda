import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Login, {ILoginForm} from './pages/Login';

export const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (user: ILoginForm) => {
    !!user;
    setIsLogin(true);
  };

  return isLogin ? (
    <View>
      <Text>15336551131</Text>
    </View>
  ) : (
    <View>
      <Login onLogin={handleLogin} />
    </View>
  );
};
