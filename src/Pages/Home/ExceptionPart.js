import React from 'react';
import treatmentPic from '../../assets/images/treatment.png'

const ExceptionPart = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img style={{ width: '460px', height: '570px' }} src={treatmentPic} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='mx-5'>
                    <h1 class="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                    <p class="py-6">
                        Bacteria in the mouth leftover from the food you eat can create unpleasant smells if not removed. Some food like garlic and onions contain smelly oils transported through the blood. Eventually, those oils reach the lungs, where you breathe them out when talking. Luckily, some foods have the opposite effect and fight bad breath.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default ExceptionPart;