import 'react-native';
import React from 'react';
import AuthProvider from './auth-context';
import {renderHook} from '@testing-library/react-hooks/native';

describe('Auth Provider', () => {
  it.skip('should provide null user context while user is logined', () => {
    const wrapper = (children: any) => {
      return <AuthProvider>{children}</AuthProvider>;
    };

    //const {result} = renderHook(() => useAuth(), {wrapper});
    //expect(result.current.user).toBe(null);
  });
});
