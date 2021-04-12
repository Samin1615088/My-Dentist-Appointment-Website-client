import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain.js/HeaderMain';
import Navbar from '../Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <section className="header-container">
            <Navbar />
            <HeaderMain />
            <BusinessInfo />
        </section>
    );
};

export default Header;