import { combineReducers } from 'redux';
import search from './search';
import load from './search';
import update from './search';

const rootReducer = combineReducers({
    search,
    load,
    update
});

export default rootReducer;