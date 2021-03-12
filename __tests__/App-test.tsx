/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

describe('App', () => {
  it('renders correctly', () => {
    const {getByText} = render(<App />);
    expect(getByText('Step One')).toBeTruthy();
  });

  it('should check types of tests', function () {
    const add = (num1: number) => {
      return num1 * 2;
    };
    expect(add(2)).toBe(4);
  });
});
