import React, {useState} from 'react';
import {View} from 'react-native';
import Login, {ILoginForm} from './screens/login/Login';
import {HomeScreen} from './screens/home/home-screen';

export const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (user: ILoginForm) => {
    !!user;
    setIsLogin(true);
  };

  return isLogin ? (
    <HomeScreen />
  ) : (
    <View>
      <Login onLogin={handleLogin} />
    </View>
  );
};
