import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            _id: '1',
            name: 'Fluoride Treatment',
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
            price: '2500$',
            img: fluoride
        },
        {
            _id: '2',
            name: 'Cavity Filling',
            description: "A cavity filling is when the dentist fills the opening in your tooth with some kind of material. The hope is to urge obviate your symptoms and make the tooth more aesthetically pleasing.",
            price: '2000$',
            img: cavity
        },
        {
            _id: '3',
            name: 'Teeth Whitening',
            description: "We have the modern technology to make your teeth white and healthy.",
            price: '2300$',
            img: whitening
        },

    ]
    return (
        <div className='my-24'>
            <div className='text-center '>
                <h3 className='text-primary text-xl uppercase font-bold'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}>

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;