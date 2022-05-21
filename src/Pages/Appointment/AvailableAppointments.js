import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date, setDate }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div>
            <h3 className='text-2xl text-secondary text-center font-semibold'>Available Service on {format(date, 'PP')} </h3>
            <p className='text-xl text-center text-accent mt-2'>Please Select a service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;