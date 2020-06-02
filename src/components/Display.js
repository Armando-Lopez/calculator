import React from 'react';

const Display = ({ currentFormula, result }) => {
    return (
        <div className="screen">
            <div className="formula">{currentFormula}</div>
            <div id="display">{result}</div>
        </div >
    )
};


export default Display;