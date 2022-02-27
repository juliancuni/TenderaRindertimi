import Parse from './parse.init';
// import Parse from 'parse';

const TenderaRindertimi = Parse.Object.extend('TenderaRindertimi');
const TenderaRindertimiAdf = Parse.Object.extend('TenderaRindertimiAdf');

// const page = 0;
// const limit = 30;
// let count = 0;

export const getAllTenderatRikonstruksioni = async () => {
	const qry = new Parse.Query(TenderaRindertimi);

	try {
		// count = await qry.count();
		// qry.limit(limit);
		// qry.skip(page * limit);
		const tenderat = await qry.findAll();
		return tenderat;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getAllTenderatRikonstruksioniAdf = async () => {
	const qry = new Parse.Query(TenderaRindertimiAdf);
	try {
		const tenderat = await qry.findAll();
		return tenderat;
	} catch (error) {
		console.log(error);
		return null;
	}
};
