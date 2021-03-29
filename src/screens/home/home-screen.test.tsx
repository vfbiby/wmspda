import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from '../../navigation/home-navigator';

describe('HomeScreen', () => {
  it('should display user info', () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );

    const {getByText} = render(component);
    expect(getByText('未设置呢称')).toBeTruthy();
    expect(getByText(/15336551131/i)).toBeTruthy();
  });

  it('should display shipping menu', () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );

    const {getByText} = render(component);
    expect(getByText('订单拣货')).toBeTruthy();
    expect(getByText('波次拣货')).toBeTruthy();
    expect(getByText('波次播种')).toBeTruthy();
    expect(getByText('验货')).toBeTruthy();
  });

  it.skip('should redirect to ware_pick page when click ‘波次拣货’', () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );

    const {getByText} = render(component);
    fireEvent.press(getByText('波次拣货'));
    expect(getByText('一单一货')).toBeTruthy();
    expect(getByText('一单多货')).toBeTruthy();
  });
});
