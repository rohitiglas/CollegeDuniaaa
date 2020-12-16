import {api} from './api';

export const fetchWeatherData = (params) => {
  return api.get(
    '/2.5/forecast?lat=' +
      params.lat +
      '&lon=' +
      params.lng +
      '&units=days&appid=e0958edd20a28f103f1fc77428fe620b',
  );
};
