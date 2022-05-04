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

    data.userStatus=false;
    console.log(data);
    return axios.post(`${baseURL}/user`,data);
}

// Find By User ID
const findByUserId = (userId) => {
    return axios.post(`${baseURL}/user/${userId}`);
}

// Get All Users

const getAllUsers = () => {
    return axios.get(`${baseURL}/all`);
};

// Pending Request

const getAllPendingRequests = () => {

    return axios.get(`${baseURL}/status`);

};


const UserService = {
    logIn,
    register,
    findByUserId,
    getAllUsers,
    getAllPendingRequests
}

export default UserService;