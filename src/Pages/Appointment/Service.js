import React from 'react';


const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body justify-center items-center">
                <h2 className="card-title text-secondary font-bold text-2xl">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <small className='text-red-500'>Try another day!</small>
                }</p>
                <p>{slots.length} {slots.length < 1 ? 'SPACE' : 'SPACES'} AVAILABLE</p>
                <div className="card-actions">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length < 1}
                        onClick={() => setTreatment(service)}
                        className="btn modal-button btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-2">
                        make appointment
                    </label>
                </div>
            </div>
        </div >
    );
};

export default Service;