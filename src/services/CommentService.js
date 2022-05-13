// Libary for requests
const axios = require('axios');


// Base URL of user endpoints.
const baseURL = "http://localhost:8080/api/v1/comments";


// Create a new comment
const saveComment = (data) => {
    return axios.post(`${baseURL}/comment`,data);
}

const findCommentByPostId = (postId) => {
    return axios.post(`${baseURL}/comment/${postId}`);
};

const CommentService = {
    saveComment,
    findCommentByPostId
};

export default CommentService;