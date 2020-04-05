import React from 'react';
import PropTypes from 'prop-types';

function AgenteCuenta(props) { 
    return(
        <div classNmae="cotainer">
            <div>
                 Hello {props.username}
            </div>
        </div>
    );  
};

export default AgenteCuenta;