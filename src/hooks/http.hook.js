import { useCallback} from 'react'
import { useDispatch } from 'react-redux'
import { hideError, hideLoading, showError, showLoading } from '../redux/actions'

export const useHttp = () => {
    const dispatch = useDispatch()

    const request = useCallback(async (url, method = "GET", body = null, headers={}) => {
        dispatch(showLoading())
        try {
            if (body){
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, {
                method,
                body, 
                headers
            })
            const data = await response.json()
            
            if ( !response.ok ){
                throw new Error (data.message || 'Что-то пошло не так')
            }
            dispatch(hideLoading())
            return data
        } catch (e) {
            
            console.log(e.message)
            dispatch(hideLoading())
            dispatch(showError(e.message))
            dispatch(hideError())
            throw e
        }
    },[dispatch])
    return {
         request
    }
}