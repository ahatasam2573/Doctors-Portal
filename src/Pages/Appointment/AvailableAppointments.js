import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ date, setDate }) => {
    return (
        <div>
            <h3 className='text-2xl text-secondary text-center font-semibold'>Available Service on {format(date, 'PP')} </h3>
            <p className='text-xl text-center text-accent mt-2'>Please Select a service</p>
            <div className='grid grid-cols-3 gap-24 mt-12 text-center text-secondary font-bold'>
                <span>Teeth Orthodontic</span>
                <span>Cosmetic Dentistry</span>
                <span>Teeth Cleaning</span>
                <span>Cavity Protection</span>
                <span>Pediatric Dental</span>
                <span>Oral Surgery</span>
            </div>

        </div>
    );
};

export default AvailableAppointments;