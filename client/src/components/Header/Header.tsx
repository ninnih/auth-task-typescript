import React from 'react';
import Button from '../Button/Button';
import './Header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import { logoutUser } from "../../redux/actions/authActions";
import { Link } from 'react-router-dom';

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
				<Link to="/login">
					<Button type="login" value="Log in"/>
				</Link>
				}
				{ auth.isAuthenticated ? 
					null 
					:
					<Link to="/register">
						<Button type="register" value="Register"/>
					</Link>
				}
			</section>
		</header>
	)
}

export default Header;
