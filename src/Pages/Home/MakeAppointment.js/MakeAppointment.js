import React from 'react';
import doctorPic from '../../../assets/images/doctor.png'
import backgroundImage from '../../../assets/images/appointment.png'
import MainButton from '../../Shared/MainButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${backgroundImage})`,
            borderRadius: '10px',
            width: '100%'
        }} className='flex p-4 justify-cent items-center mt-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctorPic} alt="" />
            </div>
            <div className='flex-1 pt-24'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-4xl text-white pt-5'>Make an Appointment Today</h2>
                <p className='text-white pt-5 pb-5'>Hi We provide some professional doctors.They are very kind and enough experienced to give you the best treatment.Make an appointment today and also explore our website.</p>
                <MainButton>Get Started</MainButton>
            </div>
        </section>
    );
};

export default MakeAppointment;