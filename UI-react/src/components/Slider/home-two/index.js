import React from 'react';
import parse from 'html-react-parser'
import SlickSlider from '../../UI/Slick'
// import SliderData from '../../../data/Slider/home-2'
import {Link} from "react-router-dom";
import $ from "jquery";
import { useState, useEffect } from "react";
// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
   
// componentDidMount() {
//     fetch(`https://api.github.com/users/eunit99/repos`)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }
const NextArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-right"/></button>
    )
};

const PrevArrow = ({className, onClick}) => {
    return (
        <button className={className} onClick={onClick}><i className="fa fa-angle-left"/></button>
    )
};
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
//   const BaseUrl="http://127.0.0.1:8000/test/"

  const Slider = () => {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
  
    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/test/")
    //       .then(response => response.json())
    //       .then((usefulData) => {
    //         console.log(usefulData);
    //         setLoading(false);
    //         setData(usefulData);
    //       })
    //       .catch((e) => {
    //         console.error(`An error occurred: ${e}`)
    //       });
    //   }, []);  
    const [slider,setSlider]=React.useState([]);
        useEffect(()=>{
        var settings = {
            "url": "http://127.0.0.1:8000/Sliderdata/",
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            setSlider(response)
            
            
          });   
          
        }, []);
    const settings = {
        arrows: true,
        dots: false,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    };
    return (
        
        <div className={'slider-area slider-area--2'} >
            <SlickSlider settings={settings}>
                {
                   slider.map(item => (
                        <div key={item.id}>
                            <div className="slider-item"
                                 style={{backgroundImage: `url(${require('../../../assets/img/' + item.bg)})`}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 m-auto text-center">
                                            <div className="slider-content slider-content--2 light">
                                                <h2>{parse(item.title)}</h2>
                                                <p className="m-auto">{parse(item.text)}</p>
                                                {/* <Link to={`${process.env.PUBLIC_URL + item.btnLink}`} className="btn btn-brand">{item.btnText}</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </SlickSlider>
        </div>
        
    );
};

export default Slider;