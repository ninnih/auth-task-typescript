import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';
import Modal from '../../components/Modal/Modal';
import { RootState } from '../../redux/reducers/index';
import { Link } from 'react-router-dom';

import './Registration.scss';

interface Props {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	onSubmit: (e: React.FormEvent) => void,
	registration: registration
} 

interface registration {
	name: string,
	email: string,
	password: string,
	password2: string,
	errors: any
}

const Registration: FC<Props> = ({ onChange, onSubmit, registration }) => {
	const error = useSelector((state: RootState) => state.errors)

  const modalContent = (
    <section>
      <form action="" onSubmit={onSubmit}>
        <article className="modalInput">
          <input 
            type="text"
            id="name"
            onChange={onChange}
            value={registration.name || ''}
            required/>
          <label htmlFor="Name">Name</label>
          { error.name ? <Error type="registration" value={error.name}/> : null }
        </article>
        <article className="modalInput">
          <input 
            type="text" 
            id="email" 
            value={registration.email || ''}
            onChange={onChange}
            required/>
          <label htmlFor="email">Email</label>
          { error.email ? <Error type="registration" value={error.email}/> : null }
        </article>
        <article className="modalInput">
          <input 
            type="password" 
            id="password"
            value={registration.password || ''}
            onChange={onChange}
            required/>
          <label htmlFor="password">Password</label>
          { error.password ? <Error type="registration" value={error.password}/> : null }
        </article>
        <article className="modalInput">
          <input 
            type="password" 
            id="password2"
            value={registration.password2 || ''}
            onChange={onChange}
            required/>
          <label htmlFor="password2">Password *</label>
          { error.password2 ? <Error type="registration" value={error.password2}/> : null }
        </article>
        <article className="modalSubmit">
          <Button type="submit" value="Create account" />
          <Link to="/login">
            <h6>Log in</h6>
          </Link>
        </article>
      </form>
    </section>
  )
  return (
    <Modal modalContent={modalContent} />
	)
}

export default Registration
