import React from "react";
import './header.css'


export default function Header() {
    return(
        <div className="header">
            <div className="htext">Welcome to Travel Buddy</div>
            <div className="sidebutton">
                <button className="btn btn-success">Home</button>
            </div>
            <div className="sidebutton">
                <button className="btn btn-primary">Contact</button>
            </div>
        </div>
    );
}