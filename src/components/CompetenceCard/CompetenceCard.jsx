import React from 'react';
import ImageRound from "../ImageRound/ImageRound";
import "./CompetenceCard.css";

const CompetenceCard = ({competence}) => {
    return (
        <div className="competence__card">
            <ImageRound src={competence?.image} size={50} />
            <div>{competence?.name}</div>
        </div>
    );
};

export default CompetenceCard;