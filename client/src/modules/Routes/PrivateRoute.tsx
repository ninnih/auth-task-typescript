import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import Dashboard from '../Dashboard/Dashboard';

const PrivateRoute = () => {
	const auth = useSelector((state: RootState) => state.auth)
	return (
		<Route exact path='/dashboard' render={(props) => auth.isAuthenticated ? <Dashboard /> : <Redirect to='/login' />} />
	)
}

export default PrivateRoute;