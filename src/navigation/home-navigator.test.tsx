import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './home-navigator';
import {render, fireEvent, cleanup} from '@testing-library/react-native';

describe('HomeNavigator', () => {
  it('should display home screen content', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );

    const {getByText, queryByText} = render(component);
    const mobile = getByText(/15336551131/i);
    const header = queryByText('Home');
    expect(mobile).toBeTruthy();
    expect(header).toBeFalsy();
  });

  it('should takes me to wave_pick page when clicking on wave_pick icon', async () => {
    const component = (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );

    const {getByText} = render(component);
    const wavePick = getByText('波次拣货');
    fireEvent.press(wavePick);

    const newHeader = getByText('WavePick');
    const back = getByText('首页');
    expect(newHeader).toBeTruthy();
    expect(back).toBeTruthy();
  });
});
