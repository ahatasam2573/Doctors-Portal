import React from 'react';

const InfoCard = ({ img, cardTitle, description, bgColor }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgColor}`} >
            <figure className='pl-5'>
                <img className='pt-4 lg:pt-0' src={img} alt="Album"></img>
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div >
    );
};

export default InfoCard;