import axios from 'axios';

const apiPath = 'http://localhost:5000';

function registerUser(body) {
    return axios.post(`${apiPath}/auth/sign-up`, body);
}

function login(body) {
    return axios.post(`${apiPath}/auth/sign-in`, body);
}

export { registerUser, login };