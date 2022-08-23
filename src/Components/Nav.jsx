import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
        <Link to='/'><h2>Home</h2></Link>
        <Link to='/articles'><h2>Articles</h2></Link>
        </>
    )
}

export default NavBar