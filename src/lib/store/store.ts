import {writable} from 'svelte/store';
import {getTenderat} from '../services/tendera_rindertimi.service';

export const tenderaRindertimi = writable([]);
export const tenderaRindertimiAdf = writable([]);

export const setTenderatFromApi = async () => {
  const tenderat = await getTenderat();
  if (tenderat) tenderaRindertimi.set(tenderat);
};
