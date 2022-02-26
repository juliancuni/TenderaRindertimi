import Parse from './parse.init';

const TenderaRindertimi = Parse.Object.extend('TenderaRindertimi');
const TenderaRindertimiAdf = Parse.Object.extend('TenderaRindertimiAdf');

export const getAllTenderatRikonstruksioni = async () => {
	const qry = new Parse.Query(TenderaRindertimi);
	try {
		const tenderat = await qry.find();
		return tenderat;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getAllTenderatRikonstruksioniAdf = async () => {
	const qry = new Parse.Query(TenderaRindertimiAdf);
	try {
		const tenderat = await qry.find();
		return tenderat;
	} catch (error) {
		console.log(error);
		return null;
	}
};