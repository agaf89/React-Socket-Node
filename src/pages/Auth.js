import { useEffect, useState } from 'react';
import { useHttp } from './../hooks/http.hook';
import axios from 'axios'
import { InputLogin } from '../components/InputLogin';
import { InputRegister } from '../components/InputRegister';

export const Auth = () => {
    const {request} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const [login, setLogin ] = useState(true)
    const classActive = "tab col s6 active-tab"
    const classActiveLink = 'active-a'

    const formHandler = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
        console.log(form)
    }
    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log(data)
        } catch (e){}
    }
    const changeForm = () => {

    }
    

    return (
        <div className='bcg-auth'>
            <div className='row'>
                <div className='col s6 offset-s3'>
                    <h3 className='center-align'>Чат <strong>Socket.io</strong></h3>
                    <div className="card pink darken-4">
                        <ul className="tabs">
                            
                            <li onClick={()=>setLogin(true)} className={login ? classActive : 'tab col s6'}><a className={login ? classActiveLink : ''} href="#test1">Авторизация</a></li>
                            <li onClick={()=>setLogin(false)} className={!login ? classActive : 'tab col s6'}><a className={!login ? classActiveLink : ''} href="#test2">Регистрация</a></li>
                        </ul>
                            {login ? <InputLogin registerHandler={registerHandler} formHandler={formHandler}/> :
                            <InputRegister registerHandler={registerHandler} formHandler={formHandler}/>}
                            
                            
                    </div>
                </div>
            </div>
        </div>
        
    )
}