import React from 'react';
import doctorImg from './../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment-container">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctorImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-uppercase text-primary">Appointment</h5>
                        <h1 className="my-4 display-5 fw-bold">Make an Appointment <br /> Today</h1>
                        <p>It is a long established fact that a reader will be distractedby the readable
                        content of a page when looking at its
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;



{/* <div className=" container-fluid" >
                <div div className="row justify-content-center" >
                    <div className="col-md-5">
                        <img src={doctorImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 d-flex flex-column justify-content-around">
                        <h5 className="fw-bold" style={{ color: "#6ACECE" }}>Appointment</h5>
                        <div className="" >
                            <h1 className="display-3 fw-bold text-light">Make an appointment
                Today</h1>
                        </div>
                        <p className="fs-3 text-light">It is a long established fact that a reader will be distractedby the readable
                        content of a page when looking at its
            </p>
                        <div>
                            <button className="btn btn-primary" onClick={() => { console.log("Learn More clicked"); }}>Learn More</button>
                        </div>
                    </div>
                </div >
            </div > */}
