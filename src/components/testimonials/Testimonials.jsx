import React from "react" 
import "./Testimonials.css"
import AVATAR1 from "../../assets/avatar1.jpg" 
import AVATAR2 from "../../assets/avatar2.jpg" 
import AVATAR3 from "../../assets/avatar3.jpg" 
// import Swiper core and required modules
import {Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Testimonials(){ 
    return(
        <section id="testimonials" className="testimonials">
            <h5>Reviews from clients </h5>
            <h2> Testimonials </h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className="testimonial"> 
                    <div className="client__avatar">
                        <img 
                            src={AVATAR1}
                            alt="client one "
                        /> 
                    </div>
                    <h5 className="client__name"> Ernest Achiever </h5>
                    <small className="client__review">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsum, 
                        necessitatibus eius consequuntur voluptate voluptatibus modi unde eaque vel nulla saepe 
                        magnam nisi dolorum obcaecati assumenda accusantium architecto expedita vero!
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial"> 
                    <div className="client__avatar">
                        <img 
                            src={AVATAR2}
                            alt="client one "
                        /> 
                    </div>
                    <h5 className="client__name"> Ernest Achiever </h5>
                    <small className="client__review">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsum, 
                        necessitatibus eius consequuntur voluptate voluptatibus modi unde eaque vel nulla saepe 
                        magnam nisi dolorum obcaecati assumenda accusantium architecto expedita vero!
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial"> 
                    <div className="client__avatar">
                        <img 
                            src={AVATAR3}
                            alt="client one "
                        /> 
                    </div>
                    <h5 className="client__name"> Ernest Achiever </h5>
                    <small className="client__review">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsum, 
                        necessitatibus eius consequuntur voluptate voluptatibus modi unde eaque vel nulla saepe 
                        magnam nisi dolorum obcaecati assumenda accusantium architecto expedita vero!
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}