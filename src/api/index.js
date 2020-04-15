import { urlUsuarios } from './url';

const usuarios = () => fetch(urlUsuarios).then(v =>  v.json());

export const usuario = usuarios; 
