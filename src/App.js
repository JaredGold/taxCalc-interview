import React, { useState } from 'react';
import Calculator from './components/Calculator';
import { MainCard, AppDiv, TaxoTron, BigPlanet, Moon } from './styles/styles';

const App = () => {
  const initialState = {
    country: 'Australia',
    year: '2020 - 2021',
    income: ''
  };
  const [userDetail, setUserDetails] = useState(initialState);

  const updateUserDetails = event => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetail,
      [name]: value
    });
  };

  return (
    <AppDiv>
      <MainCard>
        <TaxoTron>
          <h1>Tax-o-tron</h1>
          <p>The free and simple online tax calculator</p>
          <BigPlanet />
          <Moon />
        </TaxoTron>
        <Calculator
          userDetail={userDetail}
          updateUserDetails={updateUserDetails}
        />
      </MainCard>
    </AppDiv>
  );
};

export default App;
