import { get } from 'lodash';

export const isSearchLoading  = state => get (state, 'search.isLoading');
export const userResults = state => get(state, 'search.userResults')