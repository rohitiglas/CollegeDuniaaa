import {combineReducers} from 'redux';
import weatherReducer from './weatherReducer';

const allReducers = combineReducers({
  weather: weatherReducer,
});
export default allReducers;
