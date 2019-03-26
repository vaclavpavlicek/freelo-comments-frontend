import freeloLogo from '../../images/freelo-logo.svg';
import React from 'react';

export const Toolbar = props => (
    <div className="text-center mb-4 mb-md-5">
        <a href="https://www.freelo.cz">
            <img src={freeloLogo} width="200" className="" alt=""/>
        </a>
    </div>
);