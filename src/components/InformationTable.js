import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../helpers/socket";
import { setCountUsers, setUsers } from "../redux/actions";
import { ListItem } from "./ListItem";

export const InformationTable = () => {
    const dispatch = useDispatch()
    const { count, listUsers } = useSelector( state => state.info)
    

    useEffect(()=>{
        const elems = document.querySelectorAll('.collapsible');
        window.M.Collapsible.init(elems);
        dispatch(setCountUsers())
        dispatch(setUsers())
        return () => socket.off('usersInfo')
    },[])
    
    return (
        <div className='inform-panel'>
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header">
                        <i style={{color: '#77C183'}} className="material-icons">brightness_1</i>
                         онлайн
                        
                        <span  className="badge"><strong>{count}</strong></span>
                    </div>
                    <div className="collapsible-body">
                    <ul className="collection with-header hoverable">
                        { listUsers.map( user => {
                            console.log(user)
                            return (
                                <ListItem key={user.id} name={user.user} id={user.id} />
                            )
                        }) }
                       
                    </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
} 