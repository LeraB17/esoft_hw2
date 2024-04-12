import React from 'react';
import "./CompetenceCard.css";
import ImageRound from '#components/ImageRound/ImageRound';

const CompetenceCard = ({competence}) => {
    return (
        <div className="competence__card">
            <ImageRound src={competence?.image} size={50} />
            <div>{competence?.name}</div>
        </div>
    );
};

export default CompetenceCard;