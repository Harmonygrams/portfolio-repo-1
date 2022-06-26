import React from "react" 
import Cta from "./Cta" 
import "./Header.css" 
import ME from "../../assets/me.png" 
import HeaderSocials from "./HeaderSocials" 
export default function Header(){ 
    return(
        <header> 
            <div id="home" className="header__container container">
                <h5> Hello I'm </h5>
                <h1> Harmony </h1>
                <h5 className="text-light">Fullstack Developer </h5>
                <Cta /> 
                <HeaderSocials /> 
                <div className="me">
                    <img 
                        src={ME} 
                        alt="Harmony"
                    />
                </div>
                <a href="www.google.com" className="scroll__down"> Scroll Down </a>
            </div>

        </header>
    )
}