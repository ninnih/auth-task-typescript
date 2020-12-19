import React, { FC } from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/index';

interface Props {
	path: string,
	component: JSX.Element
}

const PrivateRoute: FC<Props> = ({ path, component }) => {
	const auth = useSelector((state: RootState) => state.auth)
	return (
		<Route exact path={path} render={props => auth.isAuthenticated ? component : <Redirect to='/login' />} />
	)
}

export default PrivateRoute;