import React from 'react';
import './Banner.css'
import bannerImage from '../../../assets/images/chair.png'
import MainButton from '../../Shared/MainButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">This is the office setup where you can see some interesting and modern design.You can easily attracted with this setup and color.We are sure you are going to love it so much.</p>
                    <MainButton>Get Started</MainButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;