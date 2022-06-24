import React from "react" 
import Experience from "./components/experience/Experience"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About" 
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer" 



export default function App(){ 
    return(
        <div className="app"> 
            <Header /> 
            <Nav /> 
            <About /> 
            <Experience /> 
            <Portfolio /> 
            <Testimonials />
            <Contact /> 
            <Footer />
        </div>
    )
}
