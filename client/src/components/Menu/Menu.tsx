import React from 'react'
import './Menu.scss';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import { logoutUser } from "../../redux/actions/authActions";

export const Menu = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state: RootState) => state.auth)
	
	const logOutUser = () => {
		dispatch(logoutUser())
	}

	return (
		<section className="menu">
			<nav>
				<li><NavLink to="/">Home</NavLink></li>
				{ auth.isAuthenticated ? 
				<>
					<li><NavLink to="/dashboard">Dashboard</NavLink></li>
					<li><NavLink to="/profile">Profile</NavLink></li>
				</>
				: null }
			</nav>
			<ul>
				{ auth.isAuthenticated ? 
					<li><Link to="/login" onClick={logOutUser}>Log out</Link></li>
					:
					<>
					<li><Link to="/login">Log in</Link></li>
					<li><Link to="/register">Create account</Link></li>
					</>
				}
			</ul>
		</section>
	)
}

export default Menu;