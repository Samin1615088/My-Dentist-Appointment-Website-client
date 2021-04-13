import React from 'react';

const Testimonial = ({testimonialData}) => {
    return (
        <div className="card mx-5 shadow-sm border-top-0">
            <div className="card-body">
                <p className="card-text">{testimonialData.testimonial}</p>
                <div className="row align-items-center mt-5">
                    <div className="col-4">
                        <img src={testimonialData.profilePic} alt="" srcset="" className="img-fluid w-75" />
                    </div>
                    <div className="col-8">
                        <h5 className="card-text text-uppercase fw-bold" style={{ color: '#19D3AE' }}>{testimonialData.name}</h5>
                        <p className="card-text text-muted">{testimonialData.place}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;