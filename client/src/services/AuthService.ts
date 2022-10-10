import auth from "../config/axiosAuth";

class AuthService {

    async login(email: string, password: string) {
        return auth.post('signin', { email, password }).then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("currentUser", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    async logout() {
        localStorage.removeItem("currentUser");
    }

    async register(email: string, password: string) {
        return auth.post('signup', { email, password });
    }

}
export default new AuthService();