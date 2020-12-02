import React, {useEffect, useState} from 'react';
import CalcForm from '../components/CalcForm';
import CalcSummary from '../components/CalcSummary';
import CalcValue from '../components/CalcValue';
import './CalcContainer.css';

const CalcContainer = () => {

    const [userDetails, setUserDetails] = useState({})
    const [mortgageAmount, setMortgageAmount] = useState(0)

    const updateUserDetails = (submittedSalaries) => {
        submittedSalaries.id = Date.now();
        setUserDetails(submittedSalaries);
    }

    const calculateMortgageAmount = () => {
        const combinedSalaries = (parseInt(userDetails.app1Salary) + parseInt(userDetails.app2Salary));
        return (combinedSalaries * 3) + parseInt(userDetails.deposit) - parseInt(userDetails.expenses);
    }

    useEffect(()=>{
        setMortgageAmount(calculateMortgageAmount());
    }, [userDetails])

    return(
        <div className="calc-container">
            <h1>Craig David's Mortgage Calculator</h1>
            <img src="https://i2-prod.mirror.co.uk/incoming/article6074397.ece/ALTERNATES/s615b/Bo-Selecta.jpg" alt="Craig David" />
        <CalcForm onSalariesSubmit ={(salaries)=>updateUserDetails(salaries)} />
        <CalcSummary userDetails = {userDetails} />
        <CalcValue mortgageAmount = {mortgageAmount} />
        </div>  

    )
}

export default CalcContainer;