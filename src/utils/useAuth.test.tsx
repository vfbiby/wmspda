import React from 'react';
import {renderHook} from '@testing-library/react-hooks/native';
import {ReactNode} from 'react';
import {useAuth} from './useAuth';
import {AuthContext} from '../context/auth-context';

describe('useAuth', () => {
  it('should get user context from authContext provider', () => {
    const user = {
      name: 'vf',
      age: 36,
    };
    const wrapper = ({children}: {children: ReactNode}) => {
      return (
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
      );
    };
    const {result} = renderHook(() => useAuth(), {wrapper});
    expect(result.current?.user.name).toBe('vf');
  });

  it('should thorw an error while useAuth is not wrappered by authContext', function () {
    const {result} = renderHook(() => useAuth());
    expect(result.error).toEqual(
      Error('useAuth must be used within a AuthProvider'),
    );
  });
});
