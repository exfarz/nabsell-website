import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import {Link} from "react-router-dom";
import Logo from '../../assets/img/logo2.png'

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to={`${process.env.PUBLIC_URL + "/nabsell"}`}>
                                    <img src={Logo} alt="Logo"/>
                                </Link>

                                <Text>
                                   فروشگاه آنلایل نابسل برای ایرانیان عزیز.
                                </Text>

                                <Text classes="copyright-txt">
                                    کپی رایت {new Date().getFullYear()} &copy; ساخته شده توسط گروه<a href="#">EXFARZ</a>
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="اطلاعات">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>تماس با ما</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/about"}`}>خدمات ما</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="شبکه های اجتماعی">
                            <List classes="widget-list">
                                <LI><Link to="#" target={'_blank'}>فیسبوک</Link></LI>
                                <LI><Link to="#" target={'_blank'}>توییتر</Link></LI>
                                <LI><Link to="#" target={'_blank'}>دریبل</Link></LI>
                                <LI><Link to="#" target={'_blank'}>اینستاگرام</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="تماس با ما">
                            <address>
                                زنجان، خیابان فردوسی<br/>
                                09120000000
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
