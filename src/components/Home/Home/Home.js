import React from 'react';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Contact from './../Contact/Contact';


const Home = () => {
    return (
        <div className="">
            <Header />
            <Services />
            <FeaturedService />
            <MakeAppointment />
            <Testimonials />
            <Blogs />
            <Doctors />
            <Contact />
        </div>
    );
};

export default Home;