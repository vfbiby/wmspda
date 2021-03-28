import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './home-navigator';
import {render} from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('HomeNavigator', () => {
  it.only('should display home screen content', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );

    const {getByText} = render(component);
    const mobilePhone = getByText(/15336551131/i);
    expect(mobilePhone).toBeTruthy();
  });
});
