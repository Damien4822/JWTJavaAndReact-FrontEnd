import axios from "axios";

const USER_API = "http://localhost:8080/users/";

class UserService {
    getAll() {
        const token= localStorage.getItem("Authorization");
        console.log(token);
        return axios.get(USER_API + "index",{
            headers:{
                'Authorization':'Bearer '+token,
                'Content-Type':'application/json'
            }
        }
        )}

    getOneById(id) {
        const token= localStorage.getItem("Authorization");
        return axios.get(USER_API + id,{
            headers:{
                'Authorization':'Bearer '+token,
                'Content-Type':'application/json'
            }
        });
    }

    update(id, user) {
        const token= localStorage.getItem("Authorization");
        return axios.put(USER_API + id, user,{
            headers:{
                'Authorization':'Bearer '+token,
                'Content-Type':'application/json'
            }
        })
    }

    delete(id) {
        const token= localStorage.getItem("Authorization");
        return axios.delete(USER_API + id,{
            headers:{
                'Authorization':'Bearer '+token,
                'Content-Type':'application/json'
            }
        });
    }
}

export default new UserService()