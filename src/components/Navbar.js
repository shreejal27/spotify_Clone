import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () =>{
    return(
        <nav>
            <ul>
                <div className="topRowNavBar">
                <li>
                    <Link to="/"><i class="fa-solid fa-house fa-xl" style={{color: "#ffffff",}}></i></Link>
                </li>
                <li>
                    <Link to="/search"><i class="fa-solid fa-magnifying-glass fa-xl" style={{color: "#ffffff",}}></i></Link>
                </li>
                </div>
                <div className="bottomRowNavBar">
                <li>
                    <Link to="/album"><i class="fa-solid fa-lines-leaning fa-xl" style={{color: "#ffffff",}}></i></Link>
                </li>
                <li>
                    <Link to="/album"><i class="fa-solid fa-stop fa-2xl" style={{color: "#ffffff",}}></i></Link>
                </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar