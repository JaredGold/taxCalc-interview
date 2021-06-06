import React from "react"
import {Link} from 'react-router-dom'
import {StyledForm, FormSelection, PreviousButton, ResultsTitle} from "../styles/styles"


const CompleteForm = ({userDetail, countries, incomeYears}) => {
  
  const handleClick = () => {
    console.log("Test")
  }

  return(
    <div>
      <ResultsTitle>Your tax results</ResultsTitle>
      <StyledForm>
        <FormSelection>
          <label htmlFor="country" >Select your country of residence *</label>
          <select name="country" value={userDetail.country} disabled >
            {countries.map((country, index) => <option key={index}>{country}</option>)}
          </select>
        </FormSelection>

        <FormSelection>
          <label htmlFor="year">Select an income year *</label>
          <select name="year" value={userDetail.year} disabled>
            {incomeYears.map((year, index) => <option key={index}>{year}</option>)}
          </select>
        </FormSelection>

        <FormSelection>
          <label htmlFor="income">Enter your total taxable income for the year *</label>
          <input type="number" name="income" placeholder="Amount" value={userDetail.income} disabled/>
        </FormSelection>
      </StyledForm>
      <PreviousButton onClick={handleClick}>Go back to previous screen</PreviousButton>
    </div>
  )
}

export default CompleteForm