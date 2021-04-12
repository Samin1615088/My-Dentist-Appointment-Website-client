import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({infoData}) => {
    return (
        <div className="col-md-4 my-1">
            <div className={`d-flex info-${infoData.background} h-100`} >
                <div className="col-md-3 justify-content-center align-items-center p-4">
                    <FontAwesomeIcon size="3x" icon={infoData.icon} />
                </div>
                <div className="col-md-9 p-3 ">
                    <h5>{infoData.title}</h5>
                    <small>{infoData.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;