import React from 'react';
import backgroundImage from '../../assets/images/appointment.png'

const ContactUs = () => {
    const handleContactSubmit = event => {
        event.preventDefault();
        const submit = event.target.submit.value;
        console.log(submit.value);
    }
    return (
        <section style={{
            background: `url(${backgroundImage})`,
            borderRadius: '20px'

        }} className='py-24 text-center'>
            <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
            <h2 className='text-2xl text-white'>Stay Connected With Us</h2>
            <form onSubmit={handleContactSubmit} action="Email" className='grid my-8' >
                <input className='p-4 mx-24 lg:mx-80 mb-5 rounded-2xl' type="email" name="email" placeholder='Email Address' required />
                <input className='p-4 mx-24 lg:mx-80 mb-5 rounded-2xl' type="subject" name="subject" placeholder='Subject' required />
                <textarea className='p-4 mx-24 lg:mx-80 mb-5 rounded-2xl' name="Your Message" cols="30" rows="10" placeholder='Your Message' required></textarea>
            </form>
            <input type="submit" value="submit" class="btn btn-secondary text-white w-full max-w-xs" />
        </section >
    );
};

export default ContactUs;