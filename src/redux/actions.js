import { CREATE_POST, IS_LOGIN } from "./types";

export function createPost (post) {
    console.log(post)
    return {
        type: CREATE_POST,
        payload: post
    }
}
export function fetchAuth () {
    
    return async dispatch => {
        const response = await fetch()
        const json = await response.json()
        dispatch({
            type: IS_LOGIN, payload: json
        })
    }
}
