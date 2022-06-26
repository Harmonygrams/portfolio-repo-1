import React from "react" 
import "./About.css"
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa" 
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
export default function About(){ 
    return(
        <section id="about" className="about"> 
            <h5> Get to know </h5>
            <h2>About Me </h2>
            <div className="about__container container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img 
                            src={ME} 
                            alt="About" 
                        />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">  
                        <article className="about__card"> 
                            <FaAward className="about__icon"/> 
                            <h5> Experience </h5>
                            <small> 3+ Working Years </small>
                        </article>
                        <article className="about__card"> 
                            <FiUsers className="about__icon" /> 
                            <h5> Clients </h5>
                            <small> 200+ Clients Worldwide </small>
                        </article>
                        <article className="about__card"> 
                            <VscFolderLibrary className="about__icon"/>
                            <h5> Projects </h5>
                            <small> 80+ Completed </small>
                        </article>
                    </div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima
                        eprehenderit ipsa. Natus dolores vitae recusandae, quia distinctio sit, 
                        laudantium quam ut culpa molestias sequi nam eaque ea ducimus accusantium!
                    </p>
                    <a href="#contact" className="btn btn-primary"> Let's talk </a>
                </div>
            </div>
        </section>
    )
}