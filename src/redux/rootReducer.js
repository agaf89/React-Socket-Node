import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { chatReducer } from "./chatReducer"
import { loginReducer } from "./loginReducer"
import { informReducer } from "./informReducer"



export const rootReducer = combineReducers({
    posts: chatReducer,
    login: loginReducer,
    auth: authReducer,
    info: informReducer
})