import React from 'react';

export const Comment = ({avatar, name, text}) => (
    <div className="d-flex mb-3">
        <div className="flex-shrink-0">
            <img src={avatar} className="mr-3 rounded-circle"
                 style={{width: '3rem'}} alt="..."/>
        </div>
        <div className="bg-light p-2 p-sm-3 rounded flex-fill comment">
            <h5 className="mt-0">{name}</h5>
            <div dangerouslySetInnerHTML={{__html: text}}></div>
        </div>
    </div>
);