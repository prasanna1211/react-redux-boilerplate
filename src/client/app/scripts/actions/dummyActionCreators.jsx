/*
 * Sample action creators for HTTP GET
 */

import { httpRequests } from 'scripts/actions/index.jsx';

const dataFetchInitatedToServer = () => {
	console.log(" initated ");
}
const dataFetchSuccess = () => {
	console.log(" success ");
}
const dataFetchFailure = () => {
	console.log(" failure ");
}
const fetchDataFromServer = () => {
	return (dispatch) => {
		dispatch(dataFetchInitatedToServer());
		dispatch(dataFetchSuccess());
		dispatch(dataFetchFailure());
	}
}

export {
	fetchDataFromServer,
	dataFetchSuccess,
	dataFetchFailure,
	dataFetchInitatedToServer
}