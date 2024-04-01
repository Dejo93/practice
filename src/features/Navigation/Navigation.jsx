import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to={{ pathname: "/"}}>Home</Link>
            <Link to={{ pathname: "/about"}}>About</Link>
            <Link to={{ pathname: "/contact"}}>Contact</Link>
        </div>
    )
}

export default Navigation;