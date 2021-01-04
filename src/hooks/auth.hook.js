import {useCallback, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { isAuthFalse, isAuthTrue, setToken, setUserID } from '../redux/actions';

const storageName = 'userData'

export const useAuth = () => {
    const dispatch = useDispatch()

    const login = useCallback( (jwtToken, id) => {
        dispatch(setToken(jwtToken))
        dispatch(setUserID(id))
        dispatch(isAuthTrue())
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: jwtToken
        }))
    }, [dispatch])


    const logout = useCallback(()=> {
        dispatch(setToken(null))
        dispatch(setUserID(null))
        dispatch(isAuthFalse())
        localStorage.removeItem(storageName)
    }, [dispatch])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token ){
            login(data.token, data.userId)
        }
    }, [login])

    return { login, logout }
}