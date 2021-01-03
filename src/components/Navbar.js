import { useEffect } from 'react';

export const Navbar = () => {
    useEffect(()=> {
        const elems = document.querySelectorAll('.sidenav');
        const instances = window.M.Sidenav.init(elems);
    },[])




    return (
        <>
        <nav>
            <div className="nav-wrapper  z-depth-2" style={{padding: '0 2rem', backgroundColor: '#29B1B9'}}>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <a href="#" className="brand-logo">Socket.io</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="#">Chat</a>
                    </li>
                    <li>
                        <a href="#">Info</a>
                    </li>
                </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            <li>
                <a href="#">Chat</a>
            </li>
            <li>
                <a href="#">Info</a>
            </li>
        </ul>
        </>
    )
}