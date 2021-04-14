import React from 'react';

const BookingCard = ({ booking }) => {
    console.log(booking);
    return (
        // d-flex justify-content-center align-item-center
        <div className="col-12 col-lg-4 ">
            {/* shadow w-75 */}
            <div className="card p-3 shadow">
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-brand">{booking.subject}</h5>
                    <h6 className="card-text fw-bold text-brand-secondary mb-0">{booking.visitingHour}</h6>
                    <p className="card-text text-muted text-uppercase">{booking.totalSpace} space available</p>
                    <button className="btn btn-brand" onClick={() => { console.log('bookAppointment clicked'); }}>Book appointment</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;