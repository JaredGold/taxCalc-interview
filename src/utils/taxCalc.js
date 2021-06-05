// running off of the Tax Rates 2020-2021
// $18,201 – $45,000 - 19 cents for each $1 over $18,200
// $45,001 – $120,000 - $5,092 plus 32.5 cents for each $1 over $45,000
// $120,001 – $180,000 - $29,467 plus 37 cents for each $1 over $120,000
// $180,001 and over - $51,667 plus 45 cents for each $1 over $180,000
// The above rates do not include the Medicare levy of 2%.

const taxCalc = value => {
  let ans = {
    val1: 0,
    val2: 0,
    val3: 0,
    val4: 0
  };

  // catch to end function early if the answer is nu,,
  if (!value || isNaN(value) || value <= 18200) return ans;

  // collection of the max you can pay in tax for each category (can be automated for other years)
  let max = {
    max1: 5092,
    max2: 24375,
    max3: 22200
  };

  // all calculations
  if (value > 180000) {
    ans.val1 = max.max1;
    ans.val2 = max.max2;
    ans.val3 = max.max3;
    ans.val4 = (value - 180000) * 0.45;
  } else if (value > 120000) {
    ans.val1 = max.max1;
    ans.val2 = max.max2;
    ans.val3 = (value - 120000) * 0.37;
  } else if (value > 45000) {
    ans.val1 = max.max1;
    ans.val2 = (value - 45000) * 0.325;
  } else {
    ans.val1 = (value - 18200) * 0.19;
  }

  return ans;
};

export default taxCalc;
