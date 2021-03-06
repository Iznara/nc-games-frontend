import axios from "axios";

const api = axios.create({
    baseURL: "https://ncgames-iznara.herokuapp.com/api"
});
//-------------------------------------------------
//----------------------users----------------------
//-------------------------------------------------
//get    /users                 
export const getUsers = async () => {
    const { data } = await api.get("/users");
    console.log(data)
    return data.users;
};
//get    /users/:username
export const getUserByUsername = async (username) => {
    const { data } = await api.get(`/users/${username}`)
    console.log(data);
    return data.user[0];
};
//patch  /users/:username

//post   /users
export const postUser = async (user) => {
    const { data } = await api.post(`/users`, user)
    return data;

};

//-------------------------------------------------
//---------------------reviews---------------------
//-------------------------------------------------
//get    /reviews
export const getReviews = async (params) => {
    const { data } = await api.get(`/reviews`, { params });
    console.log(data);
    return data;
};

//get    /reviews/:review_id               
export const getReviewById = async (review_id) => {
    const { data } = await api.get(`/reviews/${review_id}`);
    //console.log(data);
    return data;
};

//post   /reviews
export const postReview = async (review) => {
    const { data } = await api.post(`/reviews`, review)
    return data.reviews;
};

//patch  /reviews/:review_id
export const voteReview = async (review_id, inc_votes) => {
    const { data } = await api.patch(`/reviews/${review_id}`, { inc_votes })
    return data.review;
};

//delete /reviews/:review_id
export const deleteReview = async (review_id) => {
    const { data } = await api.delete(`/reviews/${review_id}`)
    return data.status;
};


//-------------------------------------------------
//-------------------categories--------------------
//-------------------------------------------------
//get    /categories                   
export const getCategories = async () => {
    const { data } = await api.get(`/categories`)
    console.log(data);
    return data.categories;
};
//post   /categories
export const postCategory = async (category) => {
    const { data } = await api.post(`/categories`, category)
    return data.categories;
};


//-------------------------------------------------
//--------------------comments---------------------
//-------------------------------------------------
//get    /reviews/:review_id/comments
export const getComments = async (review_id) => {
    const { data } = await api
        .get(`/reviews/${review_id}/comments`)
    console.log(data.comments);
    return data.comments;
};

//post   /reviews/:review_id/comments     
export const postComment = async (review_id, username, body) => {
    const { data } = await api
        .post(`/reviews/${review_id}/comments`, { username, body })
    return data;
};

//patch  /comments/:comment_id
export const voteComment = async (comment_id, inc_votes) => {
    const { data } = await api
        .patch(`/comments/${comment_id}`, { inc_votes })
    //console.log(data);
    return data.comment;
};

//delete /comments/:comment_id               
export const deleteComment = async (comment_id) => {
    const { data } = await api
        .delete(`/comments/${comment_id}`)
    return data.status;
};