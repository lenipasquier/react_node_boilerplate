import axios from "axios";

/**
 * Axios configuration for requests to Auth endpoints
 */
const authUrl = process.env.REACT_APP_BACKEND_URL+"/auth";
export default axios.create({
    baseURL: authUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});