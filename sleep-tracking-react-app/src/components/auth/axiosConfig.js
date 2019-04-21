// import React from 'react'
// import axios from 'axios';
// import { apiUri } from './globalVariables.js'

// axios.defaults.baseURL = `${apiUri}`;

// axios.interceptors.request.use(
//   function(request) {
//     request.headers.authorization = localStorage.getItem('token')
//     return request;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// )

const axiosConfig = {
    headers: {Authorization: localStorage.getItem('token')}
}

export default axiosConfig