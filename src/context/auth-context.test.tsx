import 'react-native';
import React, {ReactNode} from 'react';
import AuthProvider from './auth-context';
import {renderHook} from '@testing-library/react-hooks/native';
import {useAuth} from '../utils/useAuth';

describe('Auth Provider', () => {
  it('should provide user context while user is logined', () => {
    const wrapper = ({children}: {children: ReactNode}) => {
      return <AuthProvider>{children}</AuthProvider>;
    };

    const {result} = renderHook(() => useAuth(), {wrapper});
    expect(result.current?.user.name).toBe('vf');
  });
});
