import React from 'react';
import MainButton from '../Shared/MainButton';

const Service = ({ service }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body justify-center items-center">
                <h2 class="card-title text-secondary font-bold text-2xl">{service.name}</h2>
                <p>{
                    service.slots.length > 0 ? <span>{service.slots[0]}</span> : <small className='text-red-500'>No Slot Available</small>
                }</p>
                <p>{service.slots.length} {service.slots.length < 1 ? 'SPACE' : 'SPACES'} AVAILABLE</p>
                <div class="card-actions">
                    <button disabled={service.slots.length < 1} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-2">make appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;