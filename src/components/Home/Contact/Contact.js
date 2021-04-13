import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="container vh-100 contact-container text-center p-1">
            <div>
                <h5 className="fw-bold mt-5 mb-4 fs-3" style={{ color: '#1CC7C1' }}>CONTACT US</h5>
                <h1 className="fw-bold mb-3 mb-lg-5 display-3 text-light">From Our Blog News</h1>
            </div>

            <form className="w-50 mx-auto">
                <fieldset>
                    <div className="mb-3">
                        <input type="email" id="emailInput" className="form-control" placeholder="Email*" />
                    </div>
                    <div className="mb-3">
                        <input type="text" id="subjectInput" className="form-control" placeholder="Subject*" />
                    </div>
                    <div className="mb-3">
                        <textarea type="text" id="textareaInput" className="form-control" placeholder="Your Message*" style={{ height: "300px" }} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </section >
    );
};

export default Contact;