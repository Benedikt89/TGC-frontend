import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ToTopButton from '../../components/ToTopButton';
import Homepage from '../Homepage';
import RegistrationPage from '../RegistrationPage';
import LoginPage from '../LoginPage';
import PaymentPage from '../PaymentPage';
import TournamentListPage from "../TournamentListPage";
import styled from "styled-components";

const AppStyledWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppStyledWrapper>
     <Header />
     <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/registration">
        <RegistrationPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/payment">
        <PaymentPage />
      </Route>
      <Route exact path="/tournaments">
        <TournamentListPage />
      </Route>
      <Redirect to="/404" />
    </Switch>
     <Footer />
     <ToTopButton />
    </AppStyledWrapper>
  );
}

export default App;
