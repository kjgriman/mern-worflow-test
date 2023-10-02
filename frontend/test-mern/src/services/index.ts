import { fetchData } from "../utils/fetchData";
const BACKEND_URI = 'http://127.0.0.1:5000/'


const apiData = fetchData(`${BACKEND_URI}workflows`);


export {apiData}