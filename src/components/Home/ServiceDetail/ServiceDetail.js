import React from 'react';

const ServiceDetail = (props) => {
    const { serviceData } = props;
    console.log(serviceData.name, serviceData.img);
    return (
        <div className="col-md-4">
            <div className="container-fluid">
                <img src={serviceData.img} alt="" className="img-fluid" />
                <h5 className="mt-2">{serviceData.name}</h5>
            </div>
            <div>
                <p className="text-muted mt-4">Lorem Ipsum is simply dummy
                printing and typesetting indust
                Ipsum has been the </p>
            </div>
        </div>
    );
};

export default ServiceDetail;