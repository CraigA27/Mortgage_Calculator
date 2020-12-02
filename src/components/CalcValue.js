import React from 'react';

const CalcValue = ({mortgageAmount}) => {
    if(!mortgageAmount){
        return(
            <p>Loading...</p>
        )
    }
        return(
        <h3>{mortgageAmount}</h3>    
        )
}

export default CalcValue;