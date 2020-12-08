import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Routes from './modules/Routes/Routes';
import Menu from './components/Menu/Menu'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import { useDispatch } from 'react-redux';
import Background from './assets/images/green2.jpg';
import { useLocation } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // if (localStorage.jwtToken) {
  //   const token = localStorage.jwtToken;
  //   setAuthToken(token);
  //   const decoded: any = jwt_decode(token);
  //   dispatch(setCurrentUser(decoded));
  //   const currentTime = Date.now() / 1000; 
  //   if (decoded.exp < currentTime) {
  //     dispatch(logoutUser());
  //     window.location.href = "./login";
  //   }
  // }

  const [image, setImage] = useState('none');

  let background = {
    backgroundImage: image
  }

  useEffect(() => {
    if(location.pathname === '/login' || location.pathname === '/' || location.pathname === '/register') {
      setImage(`url(${Background})`)
    } else {
      setImage('none')
    }
  }, [location.pathname])
  
  return (
   <section className="wrapper">
    <Menu />
    <Header />
    <main style={background}>
      <Routes />
    </main>
   </section>
  );
}

export default App;
