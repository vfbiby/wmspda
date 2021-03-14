import React from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

interface ILoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data: ILoginForm) => {
    Alert.alert(data.username);
    console.log(data);
  };

  return (
    <View>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            onBlur={onBlur}
            placeholder="Username"
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="username"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.username && <Text>Username is required!</Text>}

      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            onBlur={onBlur}
            placeholder="Password"
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Login;
