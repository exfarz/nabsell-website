import React from 'react';
import TestimonialItem from "./TestimonialItem"
import SectionTitle from "../../UI/SectionTitle"

import TestimonialData from '../../../data/Testimonials/home-one'
import SlickSlider from "../../UI/Slick";
import $ from "jquery";
import { useState, useEffect } from "react";

function Testimonials() {
        const [Testimonials,setTestimonials]=React.useState([]);

        useEffect(()=>{
            var settings = {
                "url": "http://127.0.0.1:8000/TestimonialsData/",
                "method": "GET",
                "timeout": 0,
              };
              
              $.ajax(settings).done(function (response) {
                console.log(response);
                setTestimonials(response)
                
                
              });   
              
            }, []);

    const settings = {
        slidesToShow: 2,
        arrows: false,
        dots: true,
        className: "testimonial-content--3 testimonial-grid",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <div className="testimonial-area bg-offwhite sp-y sm-top">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-6 m-auto text-center">
                        <SectionTitle
                            title="دیدگاه متشریان"
                            heading="مشتریان ما چه می گویند؟"
                        />
                    </div> */}
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-11 m-auto">
                        <div className="testimonial-content-wrap m-0 pl-0">
                            <SlickSlider settings={settings}>
                                {
                                    Testimonials.map(testimonial => (
                                        <div key={testimonial.id}>
                                            <TestimonialItem
                                                // author={testimonial.author}
                                                authorThumb={testimonial.authorThumb}
                                                quote={testimonial.quote}
                                            />
                                        </div>
                                    ))
                                }
                            </SlickSlider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
