import React from 'react';
import {View, Text, Button} from 'react-native';

const Error = ({navigation}) => {
  return (
    <View
      style={{height: '90%', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 24, textAlign: 'center'}}>
        Something went wrong at our end
      </Text>
      <Button title="Retry" />
    </View>
  );
};

export default Error;