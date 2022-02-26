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

export const logout = async () => {
	try {
		await Parse.User.logOut();
	} catch (error) {
		console.log(error);
	}
};

export const userProfile = async () => {
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
