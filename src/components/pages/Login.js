import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import logo from '../../assets/images/Asset18_4x.png';

const Login = () => {
    return(
        <Container className="black-bg">
            <Row>
                <Col>
                    <img className="footer-logo" src={logo} alt="Little Lemon Logo" />
                </Col>
                <Col>
                    Directions
                </Col>
                <Col>
                    Contact
                </Col>
                <Col>
                    Social Media
                </Col>
            </Row>
        </Container>
    )
}

export default Login;