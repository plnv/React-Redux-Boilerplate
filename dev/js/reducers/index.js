import { combineReducers } from 'redux';
import ReducerData from './reducer-data';

const allReducers = combineReducers({
  data: ReducerData,
});

export default allReducers;
