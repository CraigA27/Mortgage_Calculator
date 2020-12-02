import React from 'react';

const CalcSummary = ({userDetails}) => {
    return(
        <>
        <h1>CalcSummary</h1>
        <p>{userDetails.app1Salary}</p>
        <p>{userDetails.app2Salary}</p>
        </>
    )
}

export default CalcSummary;