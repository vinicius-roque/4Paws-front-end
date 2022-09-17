import axios from 'axios';

const apiPath = 'https://ecommerce-4paws.herokuapp.com';

function registerUser(body) {
    return axios.post(`${apiPath}/auth/sign-up`, body);
}

function login(body) {
    return axios.post(`${apiPath}/auth/sign-in`, body);
}

function renderProducts() {
    return axios.get(`${apiPath}/products`);
}

function addToCartButton(body) {
    return axios.post(`${apiPath}/cart`, body);
}

export { addToCartButton, renderProducts, registerUser, login };