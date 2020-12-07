import React from 'react';
import Button from '../Button/Button';
import './Header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import { logoutUser } from "../../redux/actions/authActions";

const Header = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state: RootState) => state.auth)
	console.log(auth)
	const logOutUser = () => {
		dispatch(logoutUser())
	}

	return (
		<header>
			<section></section>
			<section>
				{ auth.isAuthenticated ? 
					<Button type="logout" value="Log out" action={logOutUser}/>
				: 
					<Button type="login" value="Log in"/>
				}
				<Button type="register" value="Register"/>
			</section>
		</header>
	)
}

export default Header;
