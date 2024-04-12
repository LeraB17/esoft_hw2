import React from 'react';
import './Avatar.css';
import ImageRound from '../ImageRound/ImageRound';
import Info from './Info/Info';

const Avatar = ({user, className}) => {
    return (
        <div className={'avatar ' + className}>
            <ImageRound src={user?.image} />
            <Info name={user?.name} github={user?.github} />
            <ImageRound src={user?.image2} />
        </div>
    );
};

export default Avatar;