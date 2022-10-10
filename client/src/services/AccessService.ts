import axios, {AxiosRequestHeaders} from 'axios';

const authUrl = process.env.REACT_APP_BACKEND_URL+"/auth/check";

/**
 * Checks if logged in user is authorized by calling Auth API endpoints in the backend. Called when loading a restricted route.
 */
class AccessService {

    checkAuthorizedRole() {
        /**
         * First check if there is a stored user to retrieve the auth token and pass it in the headers
         * "x-access-token" is used instead of "Authorization: Bearer" for compatibility with Node+ExpressJS backend
         */
        let storedUser: any = localStorage.getItem("currentUser");
        let user = (typeof storedUser === 'string') ? JSON.parse(storedUser) : null;
        let head: AxiosRequestHeaders = {};
        if (user && user.accessToken) {
            head['x-access-token'] = user.accessToken;
        }
        return axios.get(authUrl, { headers: head });
    }
}
export default new AccessService();