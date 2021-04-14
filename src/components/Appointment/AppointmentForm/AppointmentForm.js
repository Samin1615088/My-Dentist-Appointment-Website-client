import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
Modal.setAppElement('#root');

const customStyles = {
    content: {
        minWidth: "400px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const AppointmentForm = ({ modalIsOpen, closeModal, booking, date }) => {
    //react-hook-form >> >>
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        closeModal();
    };
    //react-hook-form << <<

    return (
        <div>
            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal">
                <div className="text-center mb-4">
                    <h4 className="text-nowrap text-brand mb-0">{booking.subject}</h4>
                    <small className="text-muted">{date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</small>
                </div>

                {/* form implementation */}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input type="text" placeholder="Patient Name" className="form-control mt-2 pt-2" defaultValue={null} {...register("patient_name", { required: true, max: 0 })} />
                    {errors.patient_name && <small className="text-danger d-block">Required</small>}

                    <input type="tel" placeholder="Phone" className="form-control mt-2 pt-2" defaultValue={null} {...register("phone", { required: true })} />
                    {errors.phone && <small className="text-danger d-block">Required</small>}

                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-control mt-2 pt-2`" defaultValue={null} {...register("email", { required: true, pattern: "//\S+@\S+\.\S+//i" })} />
                        {errors.email && <small className="text-danger d-block">Required</small>}
                    </div>

                    <div className="form-group">
                        <select className="form-control mt-2 pt-2" {...register("gender", { required: true })}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                        {errors.gender && <small className="text-danger d-block">Required</small>}
                        <input type="number" className="form-control mt-2 pt-2" placeholder="Age" {...register("age", { required: true })} />
                        {errors.age && <small className="text-danger d-block">Required</small>}

                        <input type="number" className="form-control mt-2 pt-2" placeholder="Weight" {...register("weight", { required: true })} />
                        {errors.weight && <small className="text-danger d-block">Required</small>}
                    </div>
                    <div className="d-flex justify-content-between my-3">
                        <button className="btn btn-brand" onClick={closeModal}>Close</button>
                        <input className="btn btn-brand" type="submit" />
                    </div>
                </form>
                {/* form implementation */}
            </Modal>
        </div>
    );
};

export default AppointmentForm;