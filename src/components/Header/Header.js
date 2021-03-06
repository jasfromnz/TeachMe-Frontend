import { login, logout } from '../../services/firebase';
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <nav className="red darken-3">
                <h1 className="left">TeachMe</h1>
                <ul className="right"> 
                    <li>
                        <a href="/">Home</a>
                    </li>
                { props.user ?
                    <>
                        <li>
                            <a href='/add'>Add Resource</a>
                        </li>
                        <li>
                            <a href='/user'>My Resources</a>
                        </li>
                        <li>
                            <button className="login btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                : 
                    <li>
                        <button className="login btn" onClick={login}>Login</button>
                    </li> 
                }
                </ul>
            </nav>
        </header>
    )
}


export default Header;