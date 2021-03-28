import React, {useState} from 'react';
import {View} from 'react-native';
import Login, {ILoginForm} from './screens/login/Login';
import {HomeNavigator} from './navigation/home-navigation';
import {NavigationContainer} from '@react-navigation/native';

export const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (user: ILoginForm) => {
    !!user;
    setIsLogin(true);
  };

  return isLogin ? (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  ) : (
    <View>
      <Login onLogin={handleLogin} />
    </View>
  );
};
