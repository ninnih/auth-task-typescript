import React from 'react'
import './Menu.scss';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
	return (
		<section className="menu">
			<nav>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/dashboard">Dashboard</NavLink></li>
				<li><NavLink to="/login">Login</NavLink></li>
				<li><NavLink to="/register">Register</NavLink></li>
			</nav>
		</section>
	)
}

export default Menu;