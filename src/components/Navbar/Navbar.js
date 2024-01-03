import "./Navbar.css";

export default function Navbar(){
    return(
        <>
                <div className="navbar">
                        <span className="links">My Website</span>
                        <a href="/" className="links">Home</a>
                        <a href="/Contact" className="links">Contact</a>
                        <a href="/About" className="links">About</a>
                </div>
        </>
    )
}