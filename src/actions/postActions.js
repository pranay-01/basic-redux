import * as actions from "./types"
import axios from "axios"


export const getPosts = async () => {
    try {
        const resp =  await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=15")
        return resp.data

    } catch(e) {
        console.log(e)
    }
}

export const addPost = async (payload) => {
    try {
        const resp =  await axios.post("https://jsonplaceholder.typicode.com/posts", {payload})
        return resp.data

    } catch(e) {
        console.log(e)
    }
}

export const fetchPosts = () => ({type: actions.FETCH_POSTS_ASYNC,}) 




export const createPost = (postData) => ({type: actions.NEW_POST_ASYNC, payload: postData})