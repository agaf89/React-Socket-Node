import { useCallback, useEffect } from "react"
import { useHttp } from "../hooks/http.hook"
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
export const PrivateChat = () => {
    const { token } = useSelector( state => state.auth)
    const { request } = useHttp();
    const userID = useParams().id

    const fetched = useCallback( async ()=>{
        const data = await request(`/chat/ID/${userID}`, 'GET', null, {
            authorization: `Bearer ${token}`
        })
        console.log(data)
    },[userID,request,token])
    
    useEffect(()=>{
        fetched()
        console.log(userID)
    },[userID,fetched])
    return (
        <h1>hello</h1>
    )
}