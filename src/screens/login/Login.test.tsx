import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import Login from './Login';

describe('Login page', () => {
  it('should show username and password textinput with no errors when first render', () => {
    const onLogin = jest.fn();
    const {queryByText, getByPlaceholderText} = render(
      <Login onLogin={onLogin} />,
    );
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(queryByText('Username is required!')).toBeFalsy();
    expect(queryByText('Password is required!')).toBeFalsy();
  });

  it('should display required error while username and password is invalid', async () => {
    //Given we have a form
    const onLogin = jest.fn();
    const {getByText} = render(<Login onLogin={onLogin} />);
    //When we don't type a username and click login button
    fireEvent.press(getByText('Submit'));
    //Then an alert should display to tell us to type a username for logining
    await waitFor(() => {
      expect(getByText('Username is required!')).toBeTruthy();
      expect(getByText('Password is required!')).toBeTruthy();
    });
  });

  it('should call callback when username and password are valid', async () => {
    const onLogin = jest.fn();
    const {getByText, getByPlaceholderText} = render(
      <Login onLogin={onLogin} />,
    );

    fireEvent.changeText(getByPlaceholderText('Username'), 'myUsername');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Submit'));

    await waitFor(() => {
      expect(onLogin).toBeCalledTimes(1);
      expect(onLogin).toBeCalledWith({
        username: 'myUsername',
        password: 'password',
      });
    });
  });
});
