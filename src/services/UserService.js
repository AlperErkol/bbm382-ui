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

// Get All Active Users

const getAllActiveUsers = () => {
    return axios.get(`${baseURL}/active`);
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


// Update User
const updateUser = (data) => {
    return axios.post(`${baseURL}/updateUser`,data);
}

// Update Password

const updatePassword = (data) => {
    return axios.post(`${baseURL}/updatePassword`,data);
}



const UserService = {
    logIn,
    register,
    findByUserId,
    getAllUsers,
    getAllActiveUsers,
    getAllPendingRequests,
    acceptPendingReques,
    declinePendingRequest,
    updateUser,
    updatePassword
}

export default UserService;