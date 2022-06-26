import React from "react" 
import "./Experience.css" 
import {BsCalculator, BsCpu, BsPatchCheckFill} from "react-icons/bs"
export default function Experience(){ 
    return(
        <section id="experience" className="experience">
            <h5> Skills I have </h5> 
            <h2> My experience </h2>
            <div className="experience__container container">
                <div className="experience__frontend">
                    <h3>Frontend Development </h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div> 
                                <h4>HTML</h4>
                                <small className="text-light"> Experienced </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/> 
                            <div> 
                                <h4> CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details"> 
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div> 
                                <h4> JAVASCRIPT </h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/> 
                            <div> 
                                <h4> Bootstrap </h4>
                                <small className="text-light"> Experenced </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/> 
                            <div> 
                                <h4> Tailwind </h4>
                                <small className="text-light"> Experenced </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/> 
                            <div> 
                                <h4> React </h4>
                                <small className="text-light">Experienced </small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* ========================= END OF FRONTEND ==================================== */}
                <div className="experience__backend">
                    <h3>Backend Development </h3>
                    <div className="experience__content">
                        <article className="experience__details"> 
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div> 
                                <h4>NODE JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details"> 
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div> 
                                <h4>MongoDB</h4>
                                <small className="text-light"> Intermediate</small>
                            </div> 
                        </article>
                        <article className="experience__details"> 
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div> 
                                <h4> PHP</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>  
                        <article className="experience__details"> 
                            <BsPatchCheckFill className="experience__details-icon"/> 
                            <div> 
                                <h4>MYSQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details"> 
                            <BsPatchCheckFill className="experience__details-icon"/> 
                            <div> 
                                <h4> PYTHON </h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section> 
    )
}