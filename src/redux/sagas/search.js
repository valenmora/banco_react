import { put, call, takeLatest} from 'redux-saga/effects';
import { SEARCH_LOGIN_START, SEARCH_LOGIN_ERROR, SEARCH_LOGIN_COMPLETE} from '../../contans/actionsTypes';
import { apiCall } from '../api'

export function* searchLogin({payload}){
    try{
        const results = yield call(apiCall, `${payload.user}`, null, null, 'GET'   );
        yield put({type: SEARCH_LOGIN_COMPLETE, results });
    } catch(error){
        yield put ({type: SEARCH_LOGIN_ERROR, error});
    }
}

export default function* search() {
    yield takeLatest(SEARCH_LOGIN_START, searchLogin)
}