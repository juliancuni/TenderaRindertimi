// import Parse from 'parse';
import Parse from './parse.init';

export const getLoggedInUser = () => {
	const user = Parse.User.current();
	return user;
};

export const login = async (identity: string, password: string) => {
	try {
		const user = await Parse.User.logIn(identity, password);
		return user;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const register = async ({ emriPlote, username, email, password }) => {
	const user = new Parse.User();
	user.setUsername(username);
	user.setEmail(email);
	user.setPassword(password);
	try {
		const obj = await user.save();
		if (obj) {
			const userProfile = Parse.Object.extend('UserProfile');
			userProfile.set('emriIPlote', emriPlote);
			await userProfile.save();
			return obj;
		}
		return null;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const logout = async () => {
	try {
		await Parse.User.logOut();
	} catch (error) {
		console.log(error);
	}
};

export const getLoggedInUserProfile = async () => {
	const userProfile = Parse.Object.extend('UserProfile');
	try {
		const qry = new Parse.Query(userProfile);
		const profile = await qry.first();
		if (profile) {
			return profile;
		}
		return null;
	} catch (error) {
		console.log(error);
		return null;
	}
};
