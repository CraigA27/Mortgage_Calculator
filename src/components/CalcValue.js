import React from 'react';

const CalcValue = ({mortgageAmount}) => {
    if(!mortgageAmount){
        return(
            null
        )
    }
        return(
            <>
            <h3>Here's the total you can borrow based on the information provided:</h3>
            <h4>£{mortgageAmount}</h4>
            </>
        )
}

export default CalcValue;