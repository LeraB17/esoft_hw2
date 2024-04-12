import React from 'react';
import "./CompetenceColumn.css";
import CompetenceCard from '#components/CompetenceCard/CompetenceCard';

const CompetenceColumn = ({title, competencies}) => {
    return (
        <div className={"competence__column"}>
            <h2>{title}</h2>
            {
                competencies?.map((competence, i) => <CompetenceCard key={i} competence={competence} />)
            }
        </div>
    );
};

export default CompetenceColumn;