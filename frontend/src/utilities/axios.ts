import axios from "axios";

axios.defaults.withCredentials = true;

axios.defaults.baseURL = 'http://localhost:8000';

axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
export default axios;