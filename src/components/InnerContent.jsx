import React from 'react'
import {Container} from "../styles/styles"

const InnerContent = () => {
  return(
    <div>
      <p>Your estimated taxable income is:</p>
      <div><h1>$13,217.00</h1></div>
      <h4>Breakdown</h4>
      <Container>
        <div>
          <h6>Tax Bracket</h6>
          <p>$0 - $18,200</p>
        </div>
          <p>$0</p>
      </Container>
      <Container>
        <div>
          <h6>Tax Bracket</h6>
          <p>$18,201 - $45,000</p>
        </div>
          <p>$5,092</p>
      </Container>
      <Container>
        <div>
          <h6>Tax Bracket</h6>
          <p>$45,001 - $120,000</p>
        </div>
        <p>$8,125</p>
      </Container>
      <Container>
        <div>
          <h6>Tax Bracket</h6>
          <p>$120,001 - $180,000</p>
        </div>
          <p>$0</p>
      </Container>
      <Container>
        <div>
          <h6>Tax Bracket</h6>
          <p>$180,000+</p>
        </div>
          <p>$0</p>
      </Container>
    </div>
  )
}

export default InnerContent