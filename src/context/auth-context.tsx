import React, {ReactNode} from 'react';
import {View} from 'react-native';

export const AuthContext = React.createContext<
  | {
      user: {
        name: string;
        age: number;
      };
    }
  | undefined
>(undefined);

const AuthProvider = ({children}: {children: ReactNode}) => {
  return <View>{children}</View>;
};

export default AuthProvider;
