import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infosData = [
        {
            title: "Opening Hours",
            description: "We are open 7 days",
            icon: faClock,
            background: "primary"
        },
        {
            title: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            icon: faMapMarkerAlt,
            background: "dark"
        },
        {
            title: "Contact us now",
            description: "+000 123 456789",
            icon: faPhoneAlt,
            background: "primary"
        }
    ];

    return (
        <section className="container mb-5">
            <div className="row">
                {
                    infosData.map(infoData => <InfoCard infoData={infoData} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;