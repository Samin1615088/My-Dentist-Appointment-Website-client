import React from 'react';
import doctorImg from './../../../images/doctor.png';
//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Doctor = () => {
    return (
        <div className="col-md-4">
            <div className="overflow-hidden  h-75">
                <img src={doctorImg} alt="" className="img-fluid" />
            </div>
            <div className="mt-3">
                <h5 className="fw-bold">Dr. Caudi</h5>
                <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#19D3AE" }} /><span>+61 452 200 126</span>
            </div>
        </div>
    );
};

export default Doctor;