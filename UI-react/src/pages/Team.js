import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/page";
import TeamMember from '../templates/Team'
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'

const PageTeam = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/page-header2.jpg')}
                title="اطلاعاتی درباره تیم ما"
                content="نابسل با گروهی متخصص و فعال."
            />
            <About
                title={''}
                heading={'تیم ما'}
                thumb={ServiceThumb}
                content="بسته بندی خاص توسط حرفییا"
            />
            {/* <TeamMember/> */}
            {/* <BrandLogo/>
            <Funfact classes="sp-top"/>
            <CallToAction/> */}
            <Footer/>
            {/* <LoginRegister/> */}
            <MobileMenu/>
        </Fragment>
    );
};

export default PageTeam;
