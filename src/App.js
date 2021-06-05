import React, { useState } from 'react';
import Calculator from './components/Calculator';
import { MainCard } from './styles/styles';
const App = () => {
  const initialState = {
    country: 'Australia',
    year: '2020 - 2021',
    income: ''
  };
  const [userDetail, setUserDetails] = useState(initialState);

  const backgroundStyle = {
    backgroundColor: '#E7E7FF',
    height: '100vh',
    width: '100vw'
  };

  const updateUserDetails = event => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetail,
      [name]: value
    });
  };

  return (
    <div style={backgroundStyle}>
      <MainCard>
        <div>
          <h1>Tax-o-tron</h1>
          <p>The free and simple online tax calculator</p>
        </div>
        <Calculator
          userDetail={userDetail}
          updateUserDetails={updateUserDetails}
        />
      </MainCard>
    </div>
  );
};

export default App;
