import React from 'react';

const Button = ({ id, simbol, type, onClick }) => {

    return (
        <div id={id} className="key" >
            <button className={`button ${type}`} onClick={onClick}><b>{simbol}</b></button>
        </div>
    )
}

export default Button;