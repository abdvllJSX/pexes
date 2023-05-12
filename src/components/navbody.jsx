import React from "react";
import './styles/Navbody.scss'

export default function Navbody(props) {
    return (
        <div className="main-nav" style={props.open ? { display: "none" } : { display: "block" }}>
            <ul className="main-nav-item">
                <li className="main-nav-links">home</li>
                <li className="main-nav-links">discover photos</li>
                <li className="main-nav-links">popular searches</li>
                <li className="main-nav-links">free videos</li>
                <li className="main-nav-links">challenges</li>
                <li className="main-nav-links">leaderboards</li>
                <li className="main-nav-links">pexels blog</li>
            </ul>

            <ul className="main-nav-item">
                <li className="main-nav-links">login</li>
                <li className="main-nav-links">join</li>
                <li className="main-nav-links">change language</li>
                <li className="main-nav-links">license</li>
            </ul>

            <ul className="main-nav-item">
                <li className="main-nav-links">apps & plugins</li>
                <li className="main-nav-links">FAQ</li>
                <li className="main-nav-links">about us</li>
                <li className="main-nav-links">imprint & terms</li>
            </ul>
        </div>

    )
}