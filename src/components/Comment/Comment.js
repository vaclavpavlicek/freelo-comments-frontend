import React from 'react';

export const Comment = ({author, text}) => (
    <div className="d-flex mb-3">
        <div className="bg-light p-2 p-sm-3 rounded flex-fill comment">
            <h5 className="mt-0">{author.name}</h5>
            <div dangerouslySetInnerHTML={{__html: text}}></div>
        </div>
    </div>
);