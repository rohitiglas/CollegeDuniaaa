// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WeatherForecast from '../screens/container/weather/WeatherForecast';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="Weather" component={WeatherForecast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
