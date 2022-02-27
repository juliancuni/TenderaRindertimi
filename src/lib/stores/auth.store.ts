import { writable } from 'svelte/store';
import { login, getLoggedInUser, getLoggedInUserProfile, logout } from '../parse/auth.service';

export const authenticated = writable(false);
export const loggedInUser = writable(null);
export const loggedInUserProfile = writable(null);

export const checkAuthentication = async () => {
	const user = await getLoggedInUser();
	if (user) {
		loggedInUser.set(user);
		authenticated.set(true);
		await getUserProfile();
	}
};

export const loginUser = async (identity: string, password: string) => {
	const user = await login(identity, password);
	if (user) {
		loggedInUser.set(user);
		authenticated.set(true);
	}
};

export const logoutUser = async () => {
	await logout();
	authenticated.set(false);
	loggedInUser.set(null);
};

export const getUserProfile = async () => {
	const profile = await getLoggedInUserProfile();
	if (profile) {
		loggedInUserProfile.set(profile);
	}
};
