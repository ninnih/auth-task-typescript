import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error';
import { RootState } from '../../redux/reducers/index';

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

  return (
    <section>
      <form action="" onSubmit={onSubmit}>
        <article>
          <label htmlFor="Name">Name</label>
          <input 
            type="text"
            id="name"
            onChange={onChange}
            value={registration.name || ''}
            />
          { error.name ? <Error type="registration" value={error.name}/> : null }
        </article>
        <article>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            id="email" 
            value={registration.email || ''}
            onChange={onChange}/>
          { error.email ? <Error type="registration" value={error.email}/> : null }
        </article>
        <article>
        <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            value={registration.password || ''}
            onChange={onChange}/>
          { error.password ? <Error type="registration" value={error.password}/> : null }
        </article>
        <article>
          <label htmlFor="password2">Password *</label>
          <input 
            type="password" 
            id="password2"
            value={registration.password2 || ''}
            onChange={onChange}/>
          { error.password2 ? <Error type="registration" value={error.password2}/> : null }
        </article>
        <Button type="submit" value="Submit" />
      </form>
    </section>
	)
}

export default Registration
