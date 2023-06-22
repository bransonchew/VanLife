import { Link, NavLink } from 'react-router-dom'
import avatarIcon from "../assets/images/avatar-icon.png"

export default function Header() {

    function logout() {
        localStorage.removeItem('loggedIn')
    }

    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }

    return (
        <header>
            <NavLink className="site-logo" to="/">#VanLife</NavLink>
            <nav>
                <NavLink
                    to="/host"
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                    About
                </NavLink>
                <NavLink
                    to="vans"
                    style={ ({isActive}) => isActive ? activeStyle : null }
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={ avatarIcon }
                        alt="avatar"
                        className="login-icon"
                    />
                </Link>
                <button onClick={ logout }>logout</button>
            </nav>
        </header>
    )
}