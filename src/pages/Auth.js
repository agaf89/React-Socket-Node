import { useEffect, useState } from 'react';
import { useHttp } from './../hooks/http.hook';
import { InputLogin } from '../components/InputLogin';
import { InputRegister } from '../components/InputRegister';
import { useSelector } from 'react-redux';
import { useMessage } from '../hooks/message.hook';
import { useAuth } from '../hooks/auth.hook';

export const Auth = () => {
    const {request} = useHttp()
    const message = useMessage();
    const { login } = useAuth()
    
    const [form, setForm] = useState({email: '', password: '', nameUser: ''})
    const [loginActive, setLogin ] = useState(true)
    const {loading, errorMessage} = useSelector(state => state.login)
    
    useEffect(()=> {
        message(errorMessage)
    }, [errorMessage,message])


    const classActive = "tab col s6 active-tab"
    const classActiveLink = 'active-a'

    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e){}
    }
    const loginHandler = async () => {
        try {
            const {token, userId} = await request('/api/auth/login', 'POST', {...form})
            message('Вы успешно авторизовались')
            login(token, userId)
        } catch (e) {}
    }
    
    return (
        <div className='bcg-auth'>
            <div className='row'>
                <div className='col s10 offset-s1 l4 offset-l4  m6 offset-m3'>
                    <h3 className='center-align'>Чат <strong>Socket.io</strong></h3>
                    <div className="card pink darken-4 z-depth-4">
                        <ul className="tabs">
                            <li onClick={()=>setLogin(true)} className={loginActive ? classActive : 'tab col s6 z-depth-1'}>
                                <a className={loginActive ? classActiveLink : ''} href="#test1">Авторизация</a>
                            </li>
                            <li onClick={()=>setLogin(false)} className={!loginActive ? classActive : 'tab col s6 z-depth-1'}>
                                <a className={!loginActive ? classActiveLink : ''} href="#test2">Регистрация</a>
                            </li>
                        </ul>
                            {loginActive ? <InputLogin loading={loading} registerHandler={loginHandler} formHandler={formHandler}/> :
                            <InputRegister loading={loading} registerHandler={registerHandler} formHandler={formHandler}/>}
                    </div>
                </div>
            </div>
        </div>
        
    )
}