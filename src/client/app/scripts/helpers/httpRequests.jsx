import axios from 'axios';

/*
 * HTTP GET request
 * @param {string} url
 * @param {object} paramsObject
 * @param {func} successCallback
 */
const getRequest = (url, paramsObject, successCallback, errorCallback) => {
	axios
		.get(url, {
			params : paramsObject
		})
		.then(successCallback)
		.catch(errorCallback);
}

/*
 * HTTP POST request
 * @param {string} url
 * @param {object} paramsObject
 * @param {func} successCallback
 * @param {func} errorCallback
 */
const postRequest = (url, body, successCallback, errorCallback) => {
	axios
		.post(url, body)
		.then(successCallback)
		.then(errorCallback)
}

export {
	getRequest,
	postRequest
};