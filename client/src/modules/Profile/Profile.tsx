import React, { useState } from 'react';
import './Profile.scss';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

const Profile = () => {
	const [editProfile, setEditProfile] = useState(false)
	const [profileInfo, setProfileInfo] = useState({
		username: '',
		city: ''
	});

	const changeProfileInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
		const key = e.target.id;
		const value = e.target.value;
		
		setProfileInfo({
			...profileInfo,
			[key]: value
		})
	}

	const openModal = () => {
		setEditProfile(!editProfile)
	}

	const modalContent = (
		<section>
      <form action="">
        <article className="modalInput">
          <input 
            type="text"
            id="username"
						value={profileInfo.username}
						onChange={changeProfileInfo}
            required/>
          <label htmlFor="username">Username</label>
        </article>
        <article className="modalInput">
          <input 
            type="text"
						id="city"
						value={profileInfo.city}
						onChange={changeProfileInfo}
            required/>
          <label htmlFor="city">City</label>
        </article>
        <article className="modalSubmit">
          <Button type="submit" value="save"/>
        </article>
      </form>
    </section>
	)

	return (
		<main>
		<Button type="submit" value="edit" action={openModal}/>
			{ editProfile ? 
			<Modal modalContent={modalContent}/>
			: null
			}
		</main>
	)
}

export default Profile;
