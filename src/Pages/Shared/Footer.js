import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../assets/images/footer.png';

const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (
        <footer style={{
            background: `url(${footerImg})`,
            backgroundSize: 'cover'
        }} className=" p-10 mt-14">
            <div className='footer'>
                <div>
                    <span className="footer-title">SERVICES</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teeth Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR Address</span>
                    <a className="link link-hover">New York-1010101 Hudson</a>
                </div>
            </div>
            <div className='text-center pt-5'>
                <p>Copyright © {yearNow} - All right reserved by Ahatasam Siam</p>
            </div>
        </footer>

    );
};

export default Footer;