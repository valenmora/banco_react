import axios from 'axios';

const baseURL = 'http://localhost:3001/';

export const apiCall = ( url, data, headers, method ) => axios ({
    method,
    url: baseURL + url,
    data,
    headers
});
