import {all} from 'redux-saga/effects';
import {watchWeatherData} from './weatherSaga';
function* rootSaga() {
  yield all([watchWeatherData()]);
}
export default rootSaga;
