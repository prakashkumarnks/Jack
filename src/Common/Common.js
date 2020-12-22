import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'

export  const ServerApi = "http://localhost:8080/"

export function httpverbspost(api, Parameter) {
	return new Promise((resolve, reject) => {
		axios.post(ServerApi + api, Parameter)
			.then(response => {
				resolve(response.data);
			})
			.catch(error => {
				return reject(error);
			});

	});
}

export function httpverbsget(api, Parameter) {
	return new Promise((resolve, reject) => {
		axios.get(ServerApi + api, Parameter)
			.then(response => {
				resolve(response.data);
			})
			.catch(error => {
				return reject(error);
			});

	});
}

export function httpverbsInsertForm(api, Formdata) {
	return new Promise((resolve, reject) => {
		axios({
			method: 'post',
			url: ServerApi + api,
			data: Formdata,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then((response) => {
				resolve(response);
			})
			.catch(function (error) {
				return reject(error);
			});
	});
}

export async function Awaitusesample(api, Formdata) {
	let promise = new Promise((resolve, reject) => {
		axios({
			method: 'post',
			url: ServerApi + api,
			data: Formdata,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
			.then((response) => {
				resolve(response);
			})
			.catch(function (error) {
				return reject(error);
			});
	});

	let result = await promise; // wait until the promise resolves (*)
	return result;
}

export async function Fillddl(Query) {
	let promise =  new Promise((resolve, reject) => {
		axios.post(ServerApi + '/Fillddl', { Query: Query })
			.then(response => {
				//	console.log(response.data[1]);
		var keys = Object.keys(response.data);
		console.log(keys);
				resolve(response);
			})
			.catch(error => {
				return reject(error);
			});
	});
	let result = await promise; // wait until the promise resolves (*)
	return result;
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
      var currentUser = localStorage.getItem("loggoed");
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)

export function SessionNotSet() {
	var loggoed = localStorage.getItem("loggoed");
	if (!loggoed) {
		return <Redirect to='/' />
	}
}

/*
export function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('loggoed');
}
*/