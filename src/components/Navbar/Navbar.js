import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
                <div className="navbar">
                        <span className="links">My Website</span>
                        <Link to="/" className="links">Home</Link>
                        <Link to="/Contact" className="links">Contact</Link>
                        <Link to="/About" className="links">About</Link>
                </div>
        </>
    )
}