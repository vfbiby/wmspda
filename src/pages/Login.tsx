import React from 'react';
import {
  Text,
  View,
  TextInput,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
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
    <SafeAreaView>
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
          rules={{required: true}}
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
        {errors.password && <Text>Password is required!</Text>}

        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
