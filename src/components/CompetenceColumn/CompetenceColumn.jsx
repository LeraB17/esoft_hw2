import React from 'react';
import CompetenceCard from "../CompetenceCard/CompetenceCard";
import "./CompetenceColumn.css";

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