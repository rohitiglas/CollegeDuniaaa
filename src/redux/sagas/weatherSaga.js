import {call, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import * as loginApis from '.././services/weatherApi';

export function* fetchWeatherData(action) {
  try {
    const data = yield call(loginApis.fetchWeatherData, action.params);
    action.onSuccess(data.data);
  } catch (error) {
    action.onError(error);
  }
}

export function* watchWeatherData() {
  yield takeLatest(types.FETCH_WEATHER_DATA, fetchWeatherData);
}
