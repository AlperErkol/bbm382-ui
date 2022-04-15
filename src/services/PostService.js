// Libary for requests
const axios = require('axios');


// Base URL of user endpoints.
const baseURL = "http://localhost:8080/api/v1/posts";

// Get all posts
const getAll = _ => {
    return axios.get(`${baseURL}/all`);
};

// Create a new post
const createPost = (data) => {
    return axios.post(`${baseURL}/post`,data);
}

// Update specific post
const updatePost = (data) => {
    return axios.post(`${baseURL}/updatePost`,data);
}

// Delete specific post by id
const deletePost = (postId) => {
    return axios.delete(`${baseURL}/post/${postId}`);
}

const PostService = {
    getAll,
    createPost,
    updatePost,
    deletePost
}

export default PostService;