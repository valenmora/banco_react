import { get } from 'lodash';
import { SEARCH_LOGIN_START, SEARCH_LOGIN_ERROR, SEARCH_LOGIN_COMPLETE} from './../../contans/actionsTypes';

const initialState ={};

export default function (state= initialState, action){
    switch(action.type){
        case SEARCH_LOGIN_START:
            return { ...state, isLoading: true };
            break;
        case SEARCH_LOGIN_ERROR:
            return { ...state, isLoading: false , user: null};
            break;
        case SEARCH_LOGIN_COMPLETE:
            console.log(action);
            return { ...state, isLoading: false, userResults: action.results.data};
            break;
        default:
            return {...state}
    }
}