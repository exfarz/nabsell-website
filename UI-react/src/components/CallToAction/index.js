import React from 'react';
import parse from 'html-react-parser'

import CallToActionData from '../../data/CallToAction/call-to-action'
import {Link} from "react-router-dom";
import axios from "axios";
const baseurl="http://127.0.0.1:8000/stlist/"
function CallToAction() {
    const [action,setAction]=React.useState("")
    
    React.useEffect(()=>{
        axios.get(baseurl).then((Response)=>{
            console.log(Response.data)
            setAction(Response.data)
        })
    })
    return (
        <div className="call-top-action-wrap sp-y">
            <div className="container">
                <div className="footer-top-content">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-lg-6">
                            <h2>{action.title}</h2>
                            <p>{action.text}</p>
                        </div>
                        <div className="col-md-4 col-lg-6 text-md-right mt-sm-25">
                            <Link to={`${process.env.PUBLIC_URL + action.btnLink}`} className="btn-outline">{action.btnText}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;