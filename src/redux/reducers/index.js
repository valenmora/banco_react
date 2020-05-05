import { combineReducers } from 'redux';
import search from './search';
import load from './search';

const rootReducer = combineReducers({
    search,
    load
});

export default rootReducer;