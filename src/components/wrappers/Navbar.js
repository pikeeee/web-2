import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
        return(
                <ul className="alo">
                    <li className="navbar-li"><Link to="/"><a>Information</a></Link></li>
                    <li className="navbar-li"><Link to="/test"><a>To do List App</a></Link></li>
                </ul>
        );
}
export default Navbar