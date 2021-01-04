import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { chatReducer } from "./chatReducer"
import { loginReducer } from "./loginReducer"



export const rootReducer = combineReducers({
    posts: chatReducer,
    login: loginReducer,
    auth: authReducer
})