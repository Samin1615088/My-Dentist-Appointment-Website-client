import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
    //Modal (state) code in parent>> >> 
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    //Modal (state) code in parent<< << 

    return (
        <div className="col-12 col-lg-4 ">
            <div className="card p-3 shadow">
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-brand">{booking.subject}</h5>
                    <h6 className="card-text fw-bold text-brand-secondary mb-0">{booking.visitingHour}</h6>
                    <p className="card-text text-muted text-uppercase">{booking.totalSpace} space available</p>
                    <button className="btn btn-brand" onClick={openModal}>
                        Book appointment
                    </button>
                    <AppointmentForm modalIsOpen={modalIsOpen} booking={booking} date={date} closeModal={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;