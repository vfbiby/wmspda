import React from 'react';
import {render} from '@testing-library/react-native';
import {HomeScreen} from './home-screen';

describe('HomeScreen', () => {
  it('should display user info', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('未设置呢称')).toBeTruthy();
    expect(getByText(/15336551131/i)).toBeTruthy();
  });

  it('should display shipping menu', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('订单拣货')).toBeTruthy();
    expect(getByText('波次拣货')).toBeTruthy();
    expect(getByText('波次播种')).toBeTruthy();
    expect(getByText('验货')).toBeTruthy();
  });
});
