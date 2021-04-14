import React, { useState } from 'react';
import './AppointmentHeader.css';
//calander
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//image
import chairImg from '../../../images/chair.png';


const AppointmentHeader = ({ handleDateChange }) => {

    return (
        <main className="row d-flex align-items-center d-flex" style={{ height: '600px' }}>
            <h1 className="h1 fw-bold text-center">Appointment</h1>
            <div className="col-md-4 offset-md-1">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                    className="mt-2"
                />
            </div>
            <div className="col-md-6">
                <img src={chairImg} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;