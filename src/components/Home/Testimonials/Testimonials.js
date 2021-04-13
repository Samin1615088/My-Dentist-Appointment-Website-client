import React from 'react';
import quotationBgImg from './../../../images/qutation_mark.png';
import profile1Img from './../../../images/profile1.png';
import profile2Img from './../../../images/profile2.png';
import profile3Img from './../../../images/profile3.png';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const testimonialsData = [
        {
            key: '1',
            name: 'Winson Herry',
            place: 'California',
            testimonial: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
            profilePic: profile1Img
        },
        {
            key: '2',
            name: 'Miley Filling',
            place: 'New Mexico',
            testimonial: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
            profilePic: profile2Img
        },

        {
            key: '1',
            name: 'Tina Witson',
            place: 'New york',
            testimonial: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
            profilePic: profile3Img
        },

    ];

    return (
        <section className="container my-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6">
                    <div>
                        <h5 className="text-uppercase" style={{ color: '#19D3AE' }}>TESTIMONIAL</h5>
                        <h1 className="my-4 display-5 fw-bold" style={{ color: '#203047' }}>What’s Our Patients <br /> Says</h1>
                    </div>
                </div>
                <div className="col-12 col-md-4 ms-auto">
                    <img src={quotationBgImg} alt="" className="img-fluid" />
                </div>
            </div>

            {/* test code */}

            <div className="card-group my-5 ">
                {
                    testimonialsData.map( testimonialData => <Testimonial testimonialData={testimonialData} key={testimonialData.key}/>)
                }
            </div>

            {/* test code */}

        </section>
    );
};

export default Testimonials;