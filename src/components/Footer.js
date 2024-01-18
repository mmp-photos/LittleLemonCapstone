import React from 'react';
import logo from '../assets/images/Asset18_4x.png';

const Footer = () => {
    return(
        <section className="four-col black-bg yellow">
            <img className="footer-logo" src={logo} alt="Little Lemon Logo" />
            <div>
                Directions
            </div>
            <div>
                Contact
            </div>
            <div>
                Social Media
            </div>
        </section>
    )
}

export default Footer;