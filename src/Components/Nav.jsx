import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
    return (
        <nav >
            <Link to='/'><FontAwesomeIcon icon={ faHouse } id='home-icon'/></Link>
            <ul>
                <li>
                    <Link to='/articles'><a>Articles</a></Link>
                </li>
                <li>
                    <Link to='/'><a>Account</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar