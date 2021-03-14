import React from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import tw from 'tailwind-rn';

interface ILoginForm {
  username: string;
  password: string;
}

interface LoginFormProps {
  onLogin: ({username, password}: ILoginForm) => void;
}

const Login = ({onLogin}: LoginFormProps) => {
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data: ILoginForm) => {
    onLogin(data);
  };

  return (
    <SafeAreaView style={tw('')}>
      <View style={tw('p-2')}>
        <View style={tw('flex flex-row')}>
          <Text>Username:</Text>
          {errors.username && (
            <Text style={tw('ml-2')}>Username is required!</Text>
          )}
        </View>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              placeholder="Username"
              autoCapitalize="none"
              style={tw('p-4 my-2 border border-red-200')}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="username"
          rules={{required: true}}
          defaultValue=""
        />

        <View style={tw('flex flex-row')}>
          <Text>Password:</Text>
          {errors.password && (
            <Text style={tw('ml-2')}>Password is required!</Text>
          )}
        </View>
        <Controller
          control={control}
          rules={{required: true}}
          render={({onChange, onBlur, value}) => (
            <TextInput
              onBlur={onBlur}
              style={tw('p-4 my-2 border border-red-200')}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="password"
          defaultValue=""
        />

        <TouchableOpacity
          style={tw('bg-gray-200 flex justify-center items-center my-2')}
          onPress={handleSubmit(onSubmit)}>
          <Text style={tw('p-5')}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
