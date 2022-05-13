// Libary for requests
import getLoggedInUserId from "../utils/Authentication";
const axios = require('axios');

// Base URL of user endpoints.
const baseURL = "http://localhost:8080/api/v1/posts";

// Get all posts
const getAllPosts = _ => {
    return axios.get(`${baseURL}/all`);
};

// Create a new post
const createPost = (data) => {
    let userId = getLoggedInUserId();
    data.owner = userId;
    return axios.post(`${baseURL}/post`,data);
}

// Update specific post
const updatePost = (data) => {
    let userId = getLoggedInUserId();
    data.owner = userId;
    return axios.post(`${baseURL}/updatePost`,data);
}

// Delete specific post by id
const deletePost = (postId) => {
    return axios.delete(`${baseURL}/post/${postId}`);
}

const PostService = {
    getAllPosts,
    createPost,
    updatePost,
    deletePost
}

export default PostService;