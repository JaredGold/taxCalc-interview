import React from "react"
import { Link } from 'react-router-dom';
import {InfoDiv, FormSelection, InfoGraphic, InfoContent, CalculateButton, CalculateDiv, StyledForm} from "../styles/styles"

const Calculator = (props) => {
  const {userDetail, updateUserDetails, countries, incomeYears} = props


  const handleChange = (event) => {
    updateUserDetails(event)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(userDetail)
  }
  

  return(
    <CalculateDiv>
      <h1>Calculate your tax</h1>
      
      <InfoDiv>
        <InfoGraphic><p>i</p></InfoGraphic>
        <InfoContent>Fields marked with a * are mandatory</InfoContent>
      </InfoDiv>

      <StyledForm onSubmit={handleSubmit}>
        <FormSelection>
          <label htmlFor="country" >Select your country of residence *</label>
          <select name="country" value={userDetail.country} onChange={handleChange}>
            {countries.map((country, index) => <option key={index}>{country}</option>)}
          </select>
        </FormSelection>

        <FormSelection>
          <label htmlFor="year">Select an income year *</label>
          <select name="year" value={userDetail.year} onChange={handleChange}>
            {incomeYears.map((year, index) => <option key={index}>{year}</option>)}
          </select>
        </FormSelection>

        <FormSelection>
          <label htmlFor="income">Enter your total taxable income for the year *</label>
          <input type="number" name="income" placeholder="Amount" value={userDetail.income} onChange={handleChange}/>
        </FormSelection>
        <Link to="/form-complete"><CalculateButton type="submit">Calculate</CalculateButton></Link>
      </StyledForm>

    </CalculateDiv>
  )
}

export default Calculator