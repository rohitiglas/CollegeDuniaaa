import 'react-native';
import React from 'react';
import LottieLoader from './LottieLoader';
import {render, cleanup} from '@testing-library/react-native';
describe('Lottie loader', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<LottieLoader loading={true} />);
  });
  afterEach(() => {
    cleanup();
    wrapper = null;
  });
  it('should render Loader correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
