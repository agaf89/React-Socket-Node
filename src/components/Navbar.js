export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper  z-depth-2" style={{padding: '0 2rem', backgroundColor: '#29B1B9'}}>
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
    )
}