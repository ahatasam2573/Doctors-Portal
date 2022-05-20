import React from 'react';
import Banner from './Banner/Banner';
import ExceptionPart from './ExceptionPart';
import Info from './Info';
import MakeAppointment from './MakeAppointment.js/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionPart></ExceptionPart>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;