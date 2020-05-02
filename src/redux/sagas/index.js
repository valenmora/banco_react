import { all } from 'redux-saga/effects';
import search from './search';

export default function* rootLogin(){
    yield all([
        search()
    ]);
}