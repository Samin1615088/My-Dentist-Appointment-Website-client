import React, { useState } from 'react';
import './AppointmentHeader.css';
//calander
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//image
import chairImg from '../../../images/chair.png';


const AppointmentHeader = ({ handleDateChange }) => {

    return (
        <main className="container-fluid appointment-bg" style={{ height: '600px' }}>
            <div className="container">
                <div className="row d-flex align-items-center d-flex mt-2 g-5">
                    <div className="col-md-4 offset-md-1">
                        <h1 className="h1 fw-bold text-start">Appointment</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            className="mt-3"
                        />
                    </div>
                    <div className="col-md-6">
                        <img src={chairImg} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;