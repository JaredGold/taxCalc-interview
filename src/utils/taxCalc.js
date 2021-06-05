// running off of the Tax Rates 2020-2021
// $18,201 – $45,000 - 19 cents for each $1 over $18,200
// $45,001 – $120,000 - $5,092 plus 32.5 cents for each $1 over $45,000
// $120,001 – $180,000 - $29,467 plus 37 cents for each $1 over $120,000
// $180,001 and over - $51,667 plus 45 cents for each $1 over $180,000
// The above rates do not include the Medicare levy of 2%.



const taxCalc = (value) => {
  if(!value) return null
  if(value <= 18200) return 0


}

export default taxCalc