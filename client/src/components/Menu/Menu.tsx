import React from 'react'
import './Menu.scss';
import { NavLink, Link } from 'react-router-dom';

export const Menu = () => {
	return (
		<section className="menu">
			<nav>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/dashboard">Dashboard</NavLink></li>
			</nav>
			<ul>
				<li><Link to="/login">Log in</Link></li>
				<li><Link to="/register">Create account</Link></li>
			</ul>
		</section>
	)
}

export default Menu;