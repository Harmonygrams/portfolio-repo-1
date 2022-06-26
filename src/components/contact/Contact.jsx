import React from "react" 
import "./Contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri" 
import {BsWhatsapp} from "react-icons/bs"

export default function Contact(){ 
    return(
        <section id="contact" className="contact"> 
            <h5>Get In Touch </h5>
            <h2> Contact Me </h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail/> 
                        <h4> Email </h4>
                        <h5> bluedonice@gmail.com </h5>
                        <a href="mail:bluedonice@gmail.com" target="_blank">Send A Message </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine/> 
                        <h4> Messenger </h4>
                        <h5> web3harmony </h5>
                        <a href="https://m.me/fu.to.7564" target="_blank">Send A Message </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp/> 
                        <h4> Whatsapp </h4>
                        <h5> bluedonice@gmail.com </h5>
                        <a href="https://wa.me/message/VGXJK53V5TZ5D1" target="_blank">Send A Message </a>
                    </article>
                </div>
                {/* ========== END OF CONTACT OPTIONS  ========== */}
                <form action=""> 
                    <input 
                        type = "text"
                        name = "name" 
                        placeholder="Your full name"
                        required
                    />
                    <input 
                        type="email" 
                        name = "email"
                        placeholder="Email"
                        required
                    />
                    <textarea name="message" rows="7" placeholder="Your Message..." required>
                    </textarea>
                    <button type="submit" className="btn btn-primary"> Send Message </button>
                </form>
            </div>
        </section>
    )
}