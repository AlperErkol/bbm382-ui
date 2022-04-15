// Libary for requests
const axios = require('axios');


// Base URL of user endpoints.
const baseURL = "http://localhost:8080/api/v1/users";

// LogIn
const logIn = (data) => {
    return axios.post(`${baseURL}/login`,data);
};

// Register
const register = (data) => {
    return axios.post(`${baseURL}/user`,data);
}

// Find By User ID
const findByUserId = (userId) => {
    return axios.post(`${baseURL}/user/${userId}`);
}

const UserService = {
    logIn,
    register,
    findByUserId
}

export default UserService;