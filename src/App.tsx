import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Login, {ILoginForm} from './screens/login/Login';
import unmock from 'unmock'; // ES6

unmock.on();
unmock
  .nock('http://t.test.com')
  .get('/api/users')
  .reply(200, {name: 'biby'});

export const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<{name: string}>();

  useEffect(() => {
    fetch('http://t.test.com/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUser(json);
      });
  }, []);

  const handleLogin = (user: ILoginForm) => {
    !!user;
    setIsLogin(true);
  };

  return isLogin ? (
    <SafeAreaView>
      <View>
        <Text>15336551131</Text>
        <Text>{user?.name}</Text>
      </View>
    </SafeAreaView>
  ) : (
    <View>
      <Login onLogin={handleLogin} />
    </View>
  );
};
