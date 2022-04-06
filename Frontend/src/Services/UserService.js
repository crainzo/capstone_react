import axios from 'axios';

const USR_BASE_URL = 'http://localhost:3000/user'

const headers = {
    "Content-Type":'application/json',
    Authorization:'Token ' + localStorage.getItem("token")
};

class UserService {
    loginUser(credentials){
        return axios.post(USR_BASE_URL+"/login",credentials)
    }

    getUser(){
        return axios.get(USR_BASE_URL,{headers:headers});
    }

    postUser(users){
        return axios.post(USR_BASE_URL,users,{headers:headers});
    }

    deleteUser(id){
        return axios.delete(USR_BASE_URL+"/"+id,{headers:headers});
    }
}

export default new UserService;