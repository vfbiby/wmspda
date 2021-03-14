import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

interface ILoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const {errors, handleSubmit, control} = useForm<ILoginForm>();
  const onSubmit = (data: ILoginForm) => {
    Alert.alert(data.username, data.password);
  };
  return (
    <SafeAreaView>
      <View>
        <Controller
          name="username"
          rules={{required: true}}
          defaultValue=""
          control={control}
          render={({onChange, value}) => (
            <TextInput
              placeholder="Username"
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.username && <Text>Username is required!</Text>}
      </View>
      <View>
        <TextInput placeholder="Password" onChangeText={() => {}} />
        {errors.password && <Text>Password is required!</Text>}
      </View>
      <View>
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
