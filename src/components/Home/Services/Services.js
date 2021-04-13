import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import fluoride_img from '../../../images/fluoride.png';
import cavity_img from '../../../images/cavity.png';
import whitening_img from '../../../images/whitening.png';
const servicesData = [
    {
        key: '1',
        name: 'Fluoride Treatment',
        img: fluoride_img
    },
    {
        key: '2',
        name: 'Cavity Filling',
        img: cavity_img
    },
    {
        key: '3',
        name: 'Teeth Whitening',
        img: whitening_img
    }
];

const Services = () => {
    return (
        <section className="container text-center d-flex flex-column justify-content-center vh-100">
            <div className="mb-auto">
                <h5 className="fw-bold mt-5 mb-4 fs-3" style={{ color: '#1CC7C1' }}>Our Services</h5>
                <h1 className="fw-bold mb-3 mb-lg-5 display-3" style={{ color: '#3a4256' }}>Services We Provide</h1>
            </div>
            <div className="h-100 d-flex flex-column justify-content-center">
                <div className="row">
                    {
                        servicesData.map(serviceData => <ServiceDetail serviceData={serviceData} key={serviceData.key} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;