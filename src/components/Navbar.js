import { useEffect } from 'react';
import { useAuth } from '../hooks/auth.hook';
import { NavLink, useHistory } from 'react-router-dom';

export const Navbar = () => {
    const history = useHistory()
    const { logout } = useAuth()
    useEffect(()=> {
        
        const elems = document.querySelectorAll('.sidenav');
        window.M.Sidenav.init(elems);
    },[])

    const changeLogout = () => {
        const anwser = window.confirm('Вы точно желаете выйти из чата?')
        anwser && logout();
        history.push('/')
    }

    return (
        <>
            <nav>
                <div className="nav-wrapper  z-depth-2" style={{padding: '0 2rem', backgroundColor: '#29B1B9'}}>
                <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <span className="brand-logo">Чат <strong>Socket.io</strong></span>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <NavLink to='/system-chat'>Общий чат</NavLink>
                        </li>
                        <li>
                            <NavLink to='/chat:id'>Список участников</NavLink>
                        </li>
                        <li>
                            <NavLink to='/info'>Информация</NavLink>
                        </li>
                        <li>
                            <a href='/' onClick={changeLogout}><i className="material-icons exit-btn">exit_to_app</i></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li>
                    <a href="/">Chat</a>
                </li>
                <li>
                    <a href="/">Info</a>
                </li>
            </ul>
        </>
    )
}