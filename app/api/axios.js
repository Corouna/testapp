/* Main Axios setup and configurations */

 import axios from 'axios';

 /* parse error response */
 function parseError (error) {
    console.warn('Error status', error.response.status)
    // return Promise.reject(error)
    if (error.response.status === 401 || error.response.status === 403){
        /* In the event where it returned 401 / 403, which means token is not valid */
    } else {
        return Promise.reject(error);
    }
 }
 
 /* parse response */
 function parseBody (response) {
 //  if (response.status === 200 && response.data.status.code === 200) { // - if use custom status code
   if (response.status === 200) {    
        return response.data.result;
   } else {
        return this.parseError(response.data.messages);
   }
 }
 
 /* axios instance */
 export const Ax = axios.create({
   baseURL: `https://api-app.zinguist.com`
 })
 
 Ax.interceptors.request.use((config) => {
   return config
 }, error => {
   return Promise.reject(error)
 })
 
 Ax.interceptors.response.use( parseBody, parseError );
 