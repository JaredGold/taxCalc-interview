import React from 'react'
import {Container, PurpleContainer} from "../styles/styles"

const Results = () => {
  return(
    <PurpleContainer>
      <p>Your estimated taxable income is:</p>
      <div><h1>$13,217.00</h1></div>
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
          <p>$0</p>
        </div>
      </Container>
      <Container>
        <div className="left" >
          <h6>Tax Bracket</h6>
          <p>$45,001 - $120,000</p>
        </div>
        <div className="right">
          <p>$0</p>
        </div>
      </Container>
      <Container>
        <div className="left" >
          <h6>Tax Bracket</h6>
          <p>$120,001 - $180,000</p>
        </div>
        <div className="right">
          <p>$0</p>
        </div>
      </Container>
      <Container>
        <div className="left" >
          <h6>Tax Bracket</h6>
          <p>$180,000+</p>
        </div>
        <div className="right">
          <p>$0</p>
        </div>
      </Container>
    </PurpleContainer>
  )
}

export default Results