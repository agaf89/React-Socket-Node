import { IS_LOGIN } from "./types";

const initialState = {
    posts: []
}


export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGIN:
            return {
                ...state, posts: [...state.posts, action.payload]
            }
            
    
        default:
            return state
    }
    
}