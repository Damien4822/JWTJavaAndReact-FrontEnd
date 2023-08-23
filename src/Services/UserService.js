import axios from "axios";

const USER_API = "http://localhost:8080/users/";

class UserService {
    getAll() {
        const token= localStorage.getItem("Authorization");
        return axios.get(USER_API + "index",{
            headers:{
                Authorization:'Bearer '+token
            }
        })}

    getOneById(id) {
        const token= localStorage.getItem("Authorization");
        return axios.get(USER_API + id,{
            headers:{
                Authorization:'Bearer '+token
            }
        });
    }

    update(id, user) {
        const token= localStorage.getItem("Authorization");
        return axios.put(USER_API + id, user,{
            headers:{
                Authorization:'Bearer '+token
            }
        })
    }

    delete(id) {
        const token= localStorage.getItem("Authorization");
        return axios.delete(USER_API + id,{
            headers:{
                Authorization:'Bearer '+token
            }
        });
    }
}

export default new UserService()