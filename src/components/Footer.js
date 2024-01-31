import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import logo from '../assets/images/Asset20_4x.png';
import '../assets/styles/footerStyles.css';

const Footer = () => {
    return(
        <footer>
        <Container>
            <Row>
                <Col>
                    <a href="/"><img className="footer-logo" src={logo} alt="Little Lemon Logo" /></a>
                </Col>
                <Col>
                    <ul>
                        <h3>Navigation</h3>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                        <li><a href="/online order">Online Order</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>                
                </Col>
                <Col>
                    <ul>
						<h3>Contact</h3>
							<li><a href="tel:3125555555"><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;(312) 555-5555</a></li>
							<li><a href="mailto:info@littlelemon.food"><i class="fa-regular fa-envelope"></i>&nbsp;&nbsp;info@littlelemon.food</a></li>
                    </ul>
                </Col>
                <Col>
                    <ul>
						<h3>Social Media</h3>
							<li className="social-media"><a href="http://www.facebook.com"><i class="fa-brands fa-facebook-f"></i></a></li>
							<li className="social-media"><a href="http://www.instagram.com"><i class="fa-brands fa-instagram"></i></a></li>
                            <li className="social-media"><a href="http://www.yelp.com"><i class="fa-brands fa-yelp"></i></a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer;