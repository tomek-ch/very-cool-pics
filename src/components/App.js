import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from '../Context';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MainPage from '../pages/MainPage';

function App() {
  const { currentUser } = useContext(Context);

  return (
    <div className="app-container">
      <Switch>
        <Route path="/sign-in">
          {currentUser ? <Redirect to="/" /> : <SignIn />}
        </Route>
        <Route path="/sign-up">
          {currentUser ? <Redirect to="/" /> : <SignUp />}
        </Route>
        <Route path="/">
          {currentUser ? <MainPage /> : <Redirect to="/sign-in"/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
