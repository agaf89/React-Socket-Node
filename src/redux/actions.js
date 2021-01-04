import { CREATE_POST, HIDE_ERROR, HIDE_LOADER, IS_AUTH_FALSE, IS_AUTH_TRUE, SHOW_ERROR, SHOW_LOADER, TOKEN, USER_ID } from "./types";

export function createPost (post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}
export function showLoading () {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoading () {
    return {
        type: HIDE_LOADER
    }
}
export function showError (errorMessage) {
    return {
        type: SHOW_ERROR,
        payload: errorMessage
    }
}
export function hideError () {
    return {
        type: HIDE_ERROR
    }
}
export function isAuthTrue () {
    return {
        type: IS_AUTH_TRUE
    }
}
export function isAuthFalse () {
    return {
        type: IS_AUTH_FALSE
    }
}
export function setToken (token) {
    return {
        type: TOKEN,
        payload: token
    }
}
export function setUserID (id) {
    return {
        type: USER_ID,
        payload: id
    }
}
