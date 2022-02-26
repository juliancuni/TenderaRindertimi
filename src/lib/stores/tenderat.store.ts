import { writable } from 'svelte/store';
import {
	getAllTenderatRikonstruksioni,
	getAllTenderatRikonstruksioniAdf
} from '../parse/tenderat.service';

export const tenderat = writable([]);
export const tenderatAdf = writable([]);

export const setTenderat = async () => {
	const arr = await getAllTenderatRikonstruksioni();
	tenderat.set(arr);
};
export const setTenderatAdf = async () => {
	const arr = await getAllTenderatRikonstruksioniAdf();
	tenderatAdf.set(arr);
};
