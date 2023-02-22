import React from "react";
import "../styles/styles.css";
import logo from "../styles/images/troll_face.png"

export default function Header() { 
    return (
        <header className="header">
          <img className="header--image" src={logo} alt="troll_face" />
            
             
              <h2 className="header--title"> Meme Generator </h2>
              <h4 className="header--project"> React Project 3</h4>
        </header>
    )
}