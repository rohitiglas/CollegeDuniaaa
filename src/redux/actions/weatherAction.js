import {FETCH_WEATHER_DATA} from './types';
export const fetchAllWeatherData = (params, onSuccess, onError) => ({
  type: FETCH_WEATHER_DATA,
  params,
  onSuccess,
  onError,
});
