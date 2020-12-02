import React, {useState} from 'react';
import CalcForm from '../components/CalcForm';
import CalcSummary from '../components/CalcSummary';
import CalcValue from '../components/CalcValue';

const CalcContainer = () => {

    const [userDetails, setUserDetails] = useState({})

    const updateUserDetails = (submittedSalaries) => {
        submittedSalaries.id = Date.now();
        setUserDetails(submittedSalaries);
    }

    return(
        <>
        <CalcForm onSalariesSubmit ={(salaries)=>updateUserDetails(salaries)} />
        <CalcSummary />
        <CalcValue />
        </>  

    )
}

export default CalcContainer;