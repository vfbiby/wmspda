import React, {useState} from 'react';
import {View} from 'react-native';
import Login, {ILoginForm} from './screens/login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './navigation/home-navigator';

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
