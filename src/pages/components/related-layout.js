import React from 'react';
import logo from '../../../images/logo.png';
import './related-layout.css';

function Related (props) {
    return(
        <div className="related">
            <img src={logo} width={250} />
        </div>
    )
}

export default Related;