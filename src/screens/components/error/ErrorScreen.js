import React from 'react';
import {View, Text, Button} from 'react-native';

const Error = ({retryButton}) => {
  return (
    <View
      style={{height: '90%', alignItems: 'center', justifyContent: 'center'}}>
      <Text testID="error-text" style={{fontSize: 24, textAlign: 'center'}}>
        Something went wrong at our end
      </Text>
      <Button testID="button-retry" onPress={retryButton} title="Retry" />
    </View>
  );
};

export default Error;
