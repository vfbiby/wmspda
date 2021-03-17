import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {useAsync} from '../utils/useAsync';

interface User {
  name: string;
  age: number;
}

export const AuthContext = React.createContext<
  | {
      user: User;
    }
  | undefined
>(undefined);

const AuthProvider = ({children}: {children: ReactNode}) => {
  //const {data: user} = useAsync<User | null>();
  const user: User = {
    name: 'vf',
    age: 35,
  };

  return (
    <AuthContext.Provider value={{user}}>
      <View>{children}</View>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
