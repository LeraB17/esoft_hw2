import React from 'react';
import './Info.css';

const Info = ({name, github}) => {
    return (
        <div className='avatar__info'>
            <div className='info__item'>
                <span>{name}</span>
            </div>
            <a className='github__link' href={github}>
                {github}
            </a>
        </div>
    );
};

export default Info;