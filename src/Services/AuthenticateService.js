import axios from "axios";

const AUTH_API = "http://localhost:8080/api/v1/auth/";

class AuthenticateService {
    register(user) {
        return axios.post(AUTH_API + "register", user);
    }

    authenticate(user) {
        localStorage.removeItem('Authorization');
        return axios.post(AUTH_API + "authenticate", user).then((res)=>{
            console.log(res.data.token);
            localStorage.setItem('Authorization', res.data.token);
        });
    }
}

export default new AuthenticateService()