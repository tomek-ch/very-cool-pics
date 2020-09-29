import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from '../Context';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MainPage from '../pages/MainPage';

function App() {
  const { currentUser, expectSignIn } = useContext(Context);
  
  return (
    <div className="app-container">
      <Switch>
        <Route path="/sign-in">
          {expectSignIn ? <Redirect to="/" /> : <SignIn />}
        </Route>
        <Route path="/sign-up">
          {expectSignIn ? <Redirect to="/" /> : <SignUp />}
        </Route>
        <Route path="/">
          {currentUser ? <MainPage /> : (expectSignIn ? <div>Loading...</div> : <Redirect to="/sign-in"/>)}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
