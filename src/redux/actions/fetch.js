import React from 'react';
import { urlAsignacion } from './../api/url';

const fetch = () => {
    
    return (
        
        fetch(urlAsignacion).then(response => {
            return response.json();
        })
        .then (data => {
            this.setState( {sucursales: data})
        })
    );
};

export default fetch;








