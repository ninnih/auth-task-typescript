import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';
import { RootState } from '../../redux/reducers/index';

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
  
  console.log(error)
	return (
      <section>
        <form action="" onSubmit={onLogin}>
          <article>
            <label htmlFor="email">Email</label>
            <input 
              type="text"
              id="email"
              value={login.email || ''}
              onChange={onLoginChange} />
          { error.name ? <Error type="registration" value={error.name}/> : null }
          </article>
          <article>
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              id="password"
              value={login.password  || ''}
              onChange={onLoginChange} />
            { error.passwordincorrect ? <Error type="registration" value={error.passwordincorrect}/> : null }
          </article>
          <Button type="submit" value="Submit"/>
        </form>
      </section>
	)
}

export default Login;
