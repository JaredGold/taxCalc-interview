import React from 'react'
import taxCalc from '../utils/taxCalc'
import {Container, PurpleContainer, SecondPlanet, SecondMoon} from "../styles/styles"

const Results = ({userDetail}) => {
  let taxAmount = taxCalc(userDetail.income)
  taxAmount.total = taxAmount.val1 + taxAmount.val2 + taxAmount.val3 + taxAmount.val4

  return(
    <PurpleContainer>
      <div id="top-container">
        <p>Your estimated taxable income is:</p>
        <div id="income-box"><h1>{`$${taxAmount.total}`}</h1></div>
      </div>
      <div id="breakdown">
        <h4>Breakdown</h4>
        <Container>
          <div className="left" >
            <h6>Tax Bracket</h6>
            <p>$0 - $18,200</p>
          </div>
          <div className="right">
            <p>$0</p>
          </div>
        </Container>
        <Container>
          <div className="left" >
            <h6>Tax Bracket</h6>
            <p>$18,201 - $45,000</p>
          </div>
          <div className="right">
            <p>{`$${taxAmount.val1}`}</p>
          </div>
        </Container>
        <Container>
          <div className="left" >
            <h6>Tax Bracket</h6>
            <p>$45,001 - $120,000</p>
          </div>
          <div className="right">
            <p>{`$${taxAmount.val2}`}</p>
          </div>
        </Container>
        <Container>
          <div className="left" >
            <h6>Tax Bracket</h6>
            <p>$120,001 - $180,000</p>
          </div>
          <div className="right">
            <p>{`$${taxAmount.val3}`}</p>
          </div>
        </Container>
        <Container>
          <div className="left" >
            <h6>Tax Bracket</h6>
            <p>$180,000+</p>
          </div>
          <div className="right">
            <p>{`$${taxAmount.val4}`}</p>
          </div>
        </Container>
      </div>
      <div id="planets">
        <SecondPlanet />
        <SecondMoon />
      </div>
    </PurpleContainer>
  )
}

export default Results