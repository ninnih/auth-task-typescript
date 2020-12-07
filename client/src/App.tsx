import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Routes from './modules/Routes/Routes';
import Menu from './components/Menu/Menu'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  // if (localStorage.jwtToken) {
  //   // Set auth token header auth
  //   const token = localStorage.jwtToken;
  //   setAuthToken(token);
  //   // Decode token and get user info and exp
  //   const decoded: any = jwt_decode(token);
  //   // Set user and isAuthenticated
  //   dispatch(setCurrentUser(decoded));
  // // Check for expired token
  //   const currentTime = Date.now() / 1000; // to get in milliseconds
  //   if (decoded.exp < currentTime) {
  //     // Logout user
  //     dispatch(logoutUser());
  //     // Redirect to login
  //     window.location.href = "./login";
  //   }
  // }

  return (
   <section className="wrapper">
    <Menu />
    <section className="mainWrapper">
      <Header />
      <Routes />
    </section>
   </section>
  );
}

export default App;
