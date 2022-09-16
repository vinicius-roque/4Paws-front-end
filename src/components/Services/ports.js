import axios from 'axios';

const apiPath = 'https://git.heroku.com/ecommerce-4paws.git';

function registerUser(body) {
    return axios.post(`${apiPath}/auth/sign-up`, body);
}

function login(body) {
    return axios.post(`${apiPath}/auth/sign-in`, body);
}

export { registerUser, login };