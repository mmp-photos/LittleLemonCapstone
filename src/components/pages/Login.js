import React , { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/styles/loginStyles.css';
import heroImage from '../../assets/images/restauranfood.jpg';

const Login = () => {
    const [ submitted, setSubmitted ] = useState(false);

    const handleLogin = () => setSubmitted(!submitted);

    return(
        <Container id="Login">
            <Row>
                <Col>
                    <form>
                        {submitted ? <h3>The login function is not enabled</h3>
                                   : null
                        }
                        <label htmlFor="username">Username</label>
                        <input id="username" name="username" type="text" />
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                        <button type="button" onClick={handleLogin}>Sign-in</button>
                    </form>
                </Col>
                <Col className="desktop-only">
                    <img src={heroImage} alt="Dinner" />
                </Col>
            </Row>
        </Container>
    )
}

export default Login;