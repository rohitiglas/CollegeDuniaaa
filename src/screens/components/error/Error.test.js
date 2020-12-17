import 'react-native';
import React from 'react';
import ErrorScreen from './ErrorScreen';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
describe('Error Screen', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<ErrorScreen />);
  });
  afterEach(() => {
    cleanup();
    wrapper = null;
  });
  it('should render ErrorScreen correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should show Error text and button', () => {
    const {getByTestId} = wrapper;
    expect(getByTestId('error-text').props.children).toStrictEqual(
      'Something went wrong at our end',
    );
    const submitButton = getByTestId('button-retry');
    fireEvent(submitButton, 'onClick');
  });
});
