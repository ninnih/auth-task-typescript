import React from 'react'
import './Error.scss';

type ErrorProps = {
	type: string,
	value: string
}

const Error = ({ type, value }: ErrorProps ) => {
	return (
		<h5 className={`error error--${type}`}>
			{value}
		</h5>
	)
}

export default Error;
