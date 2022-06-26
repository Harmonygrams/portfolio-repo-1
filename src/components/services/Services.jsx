import React from "react" 
import "./Services.css"
import {BiCheck} from "react-icons/bi" 


export default function Services(){ 
    return(
        <section id="services" className="services">
            <h5> What I offer </h5>
            <h2> Services </h2>
            <div className="container services__container">
                <article className="service"> 
                    <div className="service__head">
                        <h3> UI/UX DESIGN </h3>
                    </div> 
                    <ul className="service__list">
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/* ======================================== END OF UI/UX ======================================== */}
                <article className="service"> 
                    <div className="service__head">
                        <h3> WEB DEVELOPMENT </h3>
                    </div> 
                    <ul className="service__list">
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/* ======================================== END OF WEB DEVELOPMENT ======================================== */}
                <article className="service"> 
                    <div className="service__head">
                        <h3> CONTENT CREATION </h3>
                    </div> 
                    <ul className="service__list">
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li> 
                            <BiCheck className="service__list-icon"/> 
                            <p> Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/* ======================================== END OF CONTENT CREATION  ======================================== */}
                
            </div>

        </section>
    )
}