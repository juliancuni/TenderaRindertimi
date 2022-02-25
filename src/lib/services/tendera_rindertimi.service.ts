import Parse from './parse.init';

const TenderaRindertimi = Parse.Object.extend('TenderaRindertimi');

export const getTenderat = async () => {
  try {
    const qry = new Parse.Query(TenderaRindertimi);
    const tenderat: any[] = await qry.find();
    return tenderat;
  } catch (error) {
    console.log(error);
    return null;
  }
};
