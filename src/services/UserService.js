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

// Accept Pending Request
const acceptPendingReques = (userId) => {

    return axios.post(`${baseURL}/request/accept/${userId}`);

};

// Decline Pending Request && Delete
const declinePendingRequest = (userId) => {
    return axios.post(`${baseURL}/request/decline/${userId}`);
};




const UserService = {
    logIn,
    register,
    findByUserId,
    getAllUsers,
    getAllPendingRequests,
    acceptPendingReques,
    declinePendingRequest
}

export default UserService;