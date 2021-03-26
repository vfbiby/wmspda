import 'react-native';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {App} from './App';

describe('App', () => {
  it('should display login page if user is not logined', async () => {
    const {getByText} = render(<App />);
    await waitFor(() => {
      expect(getByText('Username:')).toBeTruthy();
      expect(getByText('Password:')).toBeTruthy();
      expect(getByText('Submit')).toBeTruthy();
    });
  });

  it('should display home page if user is logined', async () => {
    const {getByText, getByPlaceholderText} = render(<App />);
    fireEvent.changeText(getByPlaceholderText('Username'), 'vfbiby');
    fireEvent.changeText(getByPlaceholderText('Password'), 'bb');
    fireEvent.press(getByText('Submit'));
    await waitFor(() => {
      expect(getByText('15336551131')).toBeTruthy();
    });
  });
});
