import axios from 'axios';

const apiPath = 'https://ecommerce-4paws.herokuapp.com/';

function registerUser(body) {
    return axios.post(`${apiPath}/auth/sign-up`, body);
}

function login(body) {
    return axios.post(`${apiPath}/auth/sign-in`, body);
}

export { registerUser, login };