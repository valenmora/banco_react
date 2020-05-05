import { get } from 'lodash';
import {  SEARCH_LOGIN_START, 
    SEARCH_LOGIN_ERROR, 
    SEARCH_LOGIN_COMPLETE,
    SEARCH_USUARIO_BY_ID_START, 
    SEARCH_USUARIO_BY_ID_ERROR, 
    SEARCH_USUARIO_BY_ID_COMPLETE,
    LOAD_SUCURSAL_START,
    LOAD_SUCURSAL_ERROR,
    LOAD_SUCURSAL_COMPLETE
} from './../../contans/actionsTypes';

const initialState ={};

export default function (state= initialState, action){
    switch(action.type){
        case SEARCH_LOGIN_START:
            return { ...state, isLoading: true };
            break;
        case SEARCH_LOGIN_ERROR:
            return { ...state, isLoading: false , userResults: null};
            break;
        case SEARCH_LOGIN_COMPLETE:
            return { ...state, isLoading: false, userResults: action.results.data};
            break;
        case SEARCH_USUARIO_BY_ID_START:
            return { ...state, isLoading: true , userResult: null};
            break;
        case SEARCH_USUARIO_BY_ID_ERROR:
            return { ...state, isLoading: false , userResult: null};
            break;
        case SEARCH_USUARIO_BY_ID_COMPLETE:
            return { ...state, isLoading: false, userResult: action.usuario.data};
            break;
        case LOAD_SUCURSAL_START:
            return { ...state, isLoading: true };
            break;
        case LOAD_SUCURSAL_ERROR:
            return { ...state, isLoading: false , sucursalesResults: null};
            break;
        case LOAD_SUCURSAL_COMPLETE:
            return { ...state, isLoading: false, sucursalesResults: action.sucursales.data};
            break;
        default:
            return {...state}
    }
}