import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(){  

    const currentpath = window.location.pathname;

    function getActiveClass(path){
        return currentpath === path ? "active" :"";
    }
    return(
        <>
                <div className="nav">
                       <span className="brand links" >My Website</span>
                        <Link to="/" className={getActiveClass('/')}>Home</Link>
                        <Link to="/Contact" className={getActiveClass('/Contact')}>Contact</Link>
                        <Link to="/About" className={getActiveClass('/About')}>About</Link>
                        </div>
                
        </>
    )
}