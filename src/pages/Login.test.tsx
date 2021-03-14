import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import Login from './Login';

describe('Login page', () => {
  it('should show username and password textinput with no errors when first render', () => {
    const {getByPlaceholderText, queryByText} = render(<Login />);
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(queryByText('Username is required!')).toBeFalsy();
    expect(queryByText('Password is required!')).toBeFalsy();
  });

  it('should display required error while username is invalid', async () => {
    //Given we have a form
    const {getByPlaceholderText, getByText, toJSON} = render(<Login />);
    //When we don't type a username and click login button
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    //Then an alert should display to tell us to type a username for logining
    fireEvent.press(getByText('Submit'));

    await waitFor(() =>
      expect(getByText('Username is required!')).toBeTruthy(),
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
