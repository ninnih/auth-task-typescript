import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';
import Modal from '../../components/Modal/Modal';
import { RootState } from '../../redux/reducers/index';
import { Link } from 'react-router-dom';

import './Login.scss';

interface Props {
	onLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	onLogin: (e: React.FormEvent) => void,
	login: LogIn
}

interface LogIn {
	email: string,
	password: string,
	errors: any
}

const Login: FC<Props> = ({ onLogin, onLoginChange, login }) => {
  const error = useSelector((state: RootState) => state.errors)
  
  const modalContent = (
    <section>
      <form action="" onSubmit={onLogin}>
        <article className="modalInput">
          <input 
            type="text"
            id="email"
            value={login.email || ''}
            onChange={onLoginChange}
            required/>
          <label htmlFor="email">Email</label>
        { error.name ? <Error type="registration" value={error.name}/> : null }
        </article>
        <article className="modalInput">
          <input 
            type="password"
            id="password"
            value={login.password  || ''}
            onChange={onLoginChange}
            required/>
          <label htmlFor="password">Password</label>
          { error.passwordincorrect ? <Error type="registration" value={error.passwordincorrect}/> : null }
        </article>
        <article className="modalSubmit">
          <Button type="login" value="Log in"/>
          <Link to="/register">
            <h6>Create account</h6>
          </Link>
        </article>
      </form>
    </section>
  )

	return (
    <Modal modalContent={modalContent}/>
	)
}

export default Login;
