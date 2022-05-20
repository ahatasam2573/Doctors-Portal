import React from 'react';
import backgroundImage from '../../assets/images/appointment.png'
import MainButton from '../Shared/MainButton';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${backgroundImage})`,
            borderRadius: '20px'

        }} className='py-8 text-center'>
            <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
            <h2 className='text-2xl text-white'>Stay Connected With Us</h2>
            <form action="Email" className='grid my-8 ' >
                <input className='p-4 mx-80 mb-5 rounded-2xl' type="email" name="email" id="" placeholder='Email Address' required />
                <input className='p-4 mx-80 mb-5 rounded-2xl' type="subject" name="subject" id="" placeholder='Subject' required />
                <textarea className='p-4 mx-80 mb-5 rounded-2xl' name="Your Message" id="" cols="30" rows="10" placeholder='Your Message' required>Your Message</textarea>
            </form>
            <MainButton>Submit</MainButton>
        </section >
    );
};

export default ContactUs;