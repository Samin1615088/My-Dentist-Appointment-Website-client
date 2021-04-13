import React from 'react';
import featuredImg from './../../../images/FeaturedImg.png';

const FeaturedService = () => {
    return (
        <section className="container my-5">
            <div className="row justify-content-center" >
                <div className="col-md-4">
                    <img src={featuredImg} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-around">
                    <div className="" style={{ color: '#3A4256' }}>
                        <span className="h1 fw-bold " >Exceptional Dental</span>
                        <br />
                        <span className=" h1 fw-bold ">Care, on Your Terms</span>
                    </div>
                    <p className="text-muted">It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsumis that it has
                    a more-or-less normal distribution of letters,as opposed
                    to using ‘Content here, content here’, making it look like
                    readable English. Many desktop publishing packages
                    and web page </p>
                    <div>
                        <button className="btn btn-primary" onClick={() => { console.log("Learn More clicked"); }}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;