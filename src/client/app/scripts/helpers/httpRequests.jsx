/*
 * Functionalities for making HTTP requests using axios library (3rd party)
 * Request on Sucess successCallback(successObject)
 * successObject = { data(response from server), status(status code), statusText, headers(response headers), config }
 * Request on Failure errorCallback(errorObject)
 * errorObject = { response : { data(response from server, status, headers (response headers)) } }
 */
import axios from 'axios';

/*
 * HTTP GET request
 * @param {string} url
 * @param {object} paramsObject
 * @param {func} successCallback
 * @param {func} errorCallback
 */
const getRequest = (url, headersObject, paramsObject, successCallback, errorCallback) => {
	axios
		.get(url, {
			headers : headersObject,
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
