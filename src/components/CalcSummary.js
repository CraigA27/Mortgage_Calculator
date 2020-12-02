import React from 'react';

const CalcSummary = ({userDetails}) => {
    if(!userDetails.app1Salary){
        return(
            null
        )
    }

    if(!userDetails.app2Salary){
        return(
            <>
            <h3>Here's a summary of the details you entered:</h3>
            <p>Applicant 1 Salary: £{userDetails.app1Salary}</p>
            <p>Deposit Amount: £{userDetails.deposit}</p>
            <p>Total Expenses: £{userDetails.expenses}</p>    

    
            </>     
        )
    }
        return(
        <>
        <h3>Here's a summary of the details you entered:</h3>
         <p>Applicant 1 Salary: £{userDetails.app1Salary}</p>
         <p>Applicant 2 Salary: £{userDetails.app2Salary}</p>   
         <p>Deposit Amount: £{userDetails.deposit}</p>
         <p>Total Expenses: £{userDetails.expenses}</p>     
        </>
    )
}

export default CalcSummary;