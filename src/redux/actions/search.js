import { 
    SEARCH_LOGIN_START, 
    SEARCH_USUARIO_BY_ID_START, 
    LOAD_SUCURSAL_START, 
    LOAD_ASIGNACIONES_START
} from './../../contans/actionsTypes';

export const searchUsuario = payload => ({
    type: SEARCH_LOGIN_START,
    payload
});

export const searchUsuarioById = payload => ({
    type: SEARCH_USUARIO_BY_ID_START,
    payload
});

export const loadSucursales = payload => ({
    type: LOAD_SUCURSAL_START,
    payload
});

export const loadAsignaciones = payload => ({
    type: LOAD_ASIGNACIONES_START,
    payload
});
