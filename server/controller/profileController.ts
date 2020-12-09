import { User } from '../models/users';

const updateProfileController = (req, res) => {
	User.findOne({ email: req.body.email})
		.then(user => {
			user.info.profile.name = req.body.name;
			user.info.profile.city = req.body.city;
			user.save()
			.then(user => res.json(user))
			.catch(err => console.log(err));
		})
}

module.exports = {
	updateProfileController
}
