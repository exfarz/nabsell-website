import React from 'react';
import parse from "html-react-parser";
// import aboutData from "../../../data/About/home-two";
import aboutThumb from '../../../assets/img/about-2-bg.jpg'
import {Link} from "react-router-dom";
import $ from "jquery";
import { useState, useEffect } from "react";

const About = () => {
    const [about,setabout]=React.useState([]);
    useEffect(()=>{
    var settings = {
        "url": "http://127.0.0.1:8000/AboutData/",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        setabout(response)
        
        
      });   
      
    }, []);

    return (
        about.map(item => (

            <div className="home-two-about-area" style={{backgroundImage:`url(${aboutThumb})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 d-lg-none">
                            <figure className="about-thumb">
                                <img src={require('../../../assets/img/' + item.thumb)} alt="Businex-About"/>
                            </figure>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content about-content--2">
                                <h6>{item.title}</h6>
                                <h2>{parse(item.heading)}</h2>
                                <span className="about-since">{item.since}</span>
                                <p>{parse(item.text)}</p>
                                {/* <Link to={`${process.env.PUBLIC_URL + item.btnLink}`} className="btn-about"> <i className="fa fa-angle-double-left"/></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );
};

export default About;
