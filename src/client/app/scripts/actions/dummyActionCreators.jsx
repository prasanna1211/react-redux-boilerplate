/*
 * Sample action creators for HTTP GET
 */
import { httpRequests } from 'scripts/helpers/index.jsx';

const dataFetchInitatedToServer = () => {
	return {
		type : "initated",
		payload : {
			"intiated" : true
		}
	};
}
const dataFetchSuccess = (data) => {
	return {
		type : "success",
		payload : {
			"success" : true 
		}
	};
}
const dataFetchFailure = (error) => {
	return {
		type : "error",
		payload : {
			"success" : true
		}
	};
}
const fetchDataFromServer = () => {
	return (dispatch) => {
		dispatch(dataFetchInitatedToServer());
		var successCallback = (data) => {
			dispatch(dataFetchSuccess(data));
		};
		var errorCallback = (error) => {
			dispatch(dataFetchFailure(error));
		};
		return httpRequests.getRequest("https://private-6a1abf-welllist.apiary-mock.com/welldata", {}, {}, successCallback, errorCallback);
	}
}

export {
	fetchDataFromServer,
	dataFetchSuccess,
	dataFetchFailure,
	dataFetchInitatedToServer
}