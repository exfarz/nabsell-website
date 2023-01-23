import $ from "jquery";
import { useState, useEffect } from "react";
import React from 'react';
const Tes = () => {

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
return (
    Testimonials
)
}
export default Tes;