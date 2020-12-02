import React, {useState} from 'react';
import './CalcForm.css';

const CalcForm = ({onSalariesSubmit}) => {

    const [app1Salary, setApp1Salary] = useState(0)
    const [app2Salary, setApp2Salary] = useState(0)
    const [deposit, setDeposit] = useState(0)
    
    const handleApp1SalaryChange = (evt) => {
        setApp1Salary(evt.target.value);
    }

    const handleApp2SalaryChange = (evt) => {
        setApp2Salary(evt.target.value);
    }

    const handleDepositChange = (evt) => {
        setDeposit(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        onSalariesSubmit({
            app1Salary: app1Salary,
            app2Salary: app2Salary,
            deposit: deposit
        })
        setApp1Salary(0);
        setApp2Salary(0);
        setDeposit(0);

    }

    return(
        <>
        <div className="calc-form">
        <h2>To calculate mortgage amount enter your details below</h2>
        <form onSubmit={handleFormSubmit}>
        <label htmlFor="app1-salary">Applicant 1 Salary:</label><br />
        <input type="number" id="app1-salary" required placeholder="enter your salary" value={app1Salary} onChange={handleApp1SalaryChange}/><br />
        <label htmlFor="app2-salary">Applicant 2 Salary:</label><br />
        <input type="number" id="app2-salary" placeholder="enter your partner's salary"value={app2Salary} onChange={handleApp2SalaryChange}/><br />
        <label htmlFor="deposit">Deposit Amount:</label><br />
        <input type="number" id="deposit" required placeholder="enter deposit amount" value={deposit} onChange={handleDepositChange}/><br />
        <input type="submit" value="submit" />
        </form>
        </div>
        </>
    )
}

export default CalcForm;