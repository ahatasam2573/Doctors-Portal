import React from 'react';
import treatmentPic from '../../assets/images/treatment.png'
import MainButton from '../Shared/MainButton';

const ExceptionPart = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img style={{ width: '460px', height: '570px' }} src={treatmentPic} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mx-5'>
                    <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p className="py-6">
                        Bacteria in the mouth leftover from the food you eat can create unpleasant smells if not removed. Some food like garlic and onions contain smelly oils transported through the blood. Eventually, those oils reach the lungs, where you breathe them out when talking. Luckily, some foods have the opposite effect and fight bad breath.</p>
                    <MainButton>Get Started</MainButton>
                </div>
            </div>
        </div >
    );
};

export default ExceptionPart;