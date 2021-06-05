import React, { useState } from 'react';
import Calculator from './components/Calculator';
import NotFound from './components/NotFound';
import { MainCard, AppDiv, TaxoTron, BigPlanet, Moon } from './styles/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <TaxoTron>
                    <h1>Tax-o-tron</h1>
                    <p>The free and simple online tax calculator</p>
                    <BigPlanet />
                    <Moon />
                  </TaxoTron>
                  <Calculator
                    {...props}
                    userDetail={userDetail}
                    updateUserDetails={updateUserDetails}
                  />
                </>
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </MainCard>
    </AppDiv>
  );
};

export default App;
