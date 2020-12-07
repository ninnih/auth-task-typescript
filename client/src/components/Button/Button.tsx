import React from 'react'
import './Button.scss';

type ButtonProps = {
	type: string,
	value: string,
	action?: () => void
}

const Button = ({ type, value, action }: ButtonProps ) => {
	return (
		<button className={`button button--${type}`} onClick={action}>
			<h4>{value}</h4>
		</button>
	)
}

export default Button;
