import { put, call, takeLatest} from 'redux-saga/effects';
import { 
    SEARCH_LOGIN_START, 
    SEARCH_LOGIN_ERROR, 
    SEARCH_LOGIN_COMPLETE,
    SEARCH_USUARIO_BY_ID_START, 
    SEARCH_USUARIO_BY_ID_ERROR, 
    SEARCH_USUARIO_BY_ID_COMPLETE,
    LOAD_SUCURSAL_START, 
    LOAD_SUCURSAL_ERROR, 
    LOAD_SUCURSAL_COMPLETE,
    LOAD_ASIGNACIONES_START,
    LOAD_ASIGNACIONES_ERROR,
    LOAD_ASIGNACIONES_COMPLETE
} from '../../contans/actionsTypes';
import { apiCall } from '../api'

export function* searchLogin({payload}){
    try{
        const results = yield call(apiCall, `${payload.user}`, null, null, 'GET'   );
        yield put({type: SEARCH_LOGIN_COMPLETE, results });
    } catch(error){
        yield put ({type: SEARCH_LOGIN_ERROR, error});
    }
}

export function* searchUserById({payload}){
    try {
        const usuario = yield call(apiCall, `admin/${payload.userId}`, null, null, 'GET'   );
        yield put({type: SEARCH_USUARIO_BY_ID_COMPLETE, usuario });
    } catch (error) {
        yield put({type: SEARCH_USUARIO_BY_ID_ERROR, error});
    }
}

export function* loadSucursales({payload}){
    try{
        const sucursales = yield call(apiCall, `sucursales`, null, null, 'GET'   );
        yield put({type: LOAD_SUCURSAL_COMPLETE, sucursales });
    } catch(error){
        yield put ({type: LOAD_SUCURSAL_ERROR, error});
    }
}

export function* loadAsignaciones({payload}){
    try{
        const asignaciones = yield call(apiCall, `asignaciones`, null, null, 'GET'   );
        yield put({type: LOAD_ASIGNACIONES_COMPLETE, asignaciones });
    } catch(error){
        yield put ({type: LOAD_ASIGNACIONES_ERROR, error});
    }
}
export default function* search() {
    yield takeLatest(SEARCH_LOGIN_START, searchLogin);
    yield takeLatest(SEARCH_USUARIO_BY_ID_START, searchUserById);
    yield takeLatest(LOAD_SUCURSAL_START, loadSucursales);
    yield takeLatest(LOAD_ASIGNACIONES_START, loadAsignaciones);
}