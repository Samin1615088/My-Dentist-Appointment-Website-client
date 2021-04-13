import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section className="container text-center vh-100 d-flex flex-column justify-content-evenly">
            <h5 className="fw-bold mt-5 mb-4 fs-3" style={{ color: '#1CC7C1' }}>OUR BLOG</h5>
            <div className="row">
                <Doctor />
                <Doctor />
                <Doctor />
            </div>
        </section>
    );
};

export default Doctors;