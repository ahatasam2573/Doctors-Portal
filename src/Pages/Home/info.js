import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-12'>
            <InfoCard description='Open from 9:00AM to 8:00PM' bgColor='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' img={clock}></InfoCard>
            <InfoCard description='Near Dhaka College,in front of Dhaka new Market,Dhanmondi,Dhaka-1280' bgColor='bg-[#3d4451]' cardTitle='Our Location' img={marker}></InfoCard>
            <InfoCard description='Phone No: 01750-013906' bgColor='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact Us Now' img={phone}></InfoCard>
        </div>
    );
};

export default info;