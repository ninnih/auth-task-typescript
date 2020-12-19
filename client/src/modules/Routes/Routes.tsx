import React, { FC } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from '../Home/Home';
import { registerUser, loginUser } from  '../../redux/actions/authActions'
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';

const Routes: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [registration, setRegistration] = React.useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  });
  
  const [login, setLogin] = React.useState({
    email: '',
    password: '',
    errors: {}
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    const value = e.target.value;

    setRegistration({
      ...registration,
      [key]: value,
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      name: registration.name,
      email: registration.email,
      password: registration.password,
      password2: registration.password2
    }
    dispatch(registerUser(newUser, history))
  }

  const onLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    const value = e.target.value;

    setLogin({
      ...login,
      [key]: value,
    })
  }

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const newLogin = {
      email: login.email,
      password: login.password
    }
    dispatch(loginUser(newLogin, history))

    setLogin({
      email: '',
      password: '',
      errors: {}
    })
  }

  return (
      <Switch> 
        <Route exact path='/' render={() => <Home />}></Route>
        <Route exact path='/register' render={(props) => <Registration {...props} onChange={onChange} onSubmit={onSubmit} registration={registration}/>}></Route>
        <Route exact path='/login' render={(props) => <Login {...props} onLoginChange={onLoginChange} onLogin={onLogin} login={login} />}></Route>
        <PrivateRoute path='/dashboard' component={<Dashboard/>}/>
        <PrivateRoute path='/profile' component={<Profile/>}/>
      </Switch>
  );
}

export default Routes;
