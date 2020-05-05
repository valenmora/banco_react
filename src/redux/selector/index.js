import { get } from 'lodash';

export const isSearchLoading  = state => get (state, 'search.isLoading');
export const userResults = state => get(state, 'search.userResults')
export const userResult  = state => get(state,'search.userResult')

export const sucursalesResults = state => get(state, 'search.sucursalesResults')

export const asignacionesResults = state => get(state, 'search.asignacionesResults')
