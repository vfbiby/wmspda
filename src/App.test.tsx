import 'react-native';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {App} from './App';

describe('App', () => {
  it('should display login page if user is not logined', () => {
    const {getByText, getByRole} = render(<App />);
    expect(getByText('Username')).toBeTruthy();
    expect(getByText('Password')).toBeTruthy();
    expect(getByRole('button')).toBeTruthy();
  });

  it('should display home page if user is logined', async () => {
    const {getByText, getByPlaceholderText, getByRole} = render(<App />);
    fireEvent.changeText(getByPlaceholderText('Username'), 'vfbiby');
    fireEvent.changeText(getByPlaceholderText('Password'), 'bb');
    fireEvent.press(getByRole('button'));
    await waitFor(() => {
      expect(getByText('15336551131')).toBeTruthy();
    });
  });
});
