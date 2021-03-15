import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {App} from './App';

describe('App', () => {
  it('should display login page if user is not logined', () => {
    const {getByText, getByRole} = render(<App />);
    expect(getByText('Username')).toBeTruthy();
    expect(getByText('Password')).toBeTruthy();
    expect(getByRole('button')).toBeTruthy();
  });

  it.skip("should display home page if user is logined", function(){
    const {getByText} = render(<App />);
    expect(getByText('15336551131')).toBeTruthy();
  })
});
