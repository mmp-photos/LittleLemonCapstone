import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/Asset16-4x.png';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
  import '../assets/styles/headerStyles.css';

const Header = ( { updateTimes, availableTimes } ) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const navigate = useNavigate();
    // console.log("Header availableTimes:", availableTimes);

    return(
        <Container id="Header">
            <Row>
                <Navbar color="faded" light expand="lg">
                <Col>
                    <NavbarBrand className="me-auto">
                        <button onClick={() => navigate('/')}>
                            <img src={logo} className="primary-logo" alt="Little Lemon Logo" />
                        </button>
                    </NavbarBrand>
                </Col>
                <Col className="right-align">
                    <NavbarToggler onClick={toggleNavbar} className="me-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar className="mobile-nav" style={{position: "absolute"}}>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#About">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#Specials">Menu</NavLink>
                        </NavItem>
                       <NavItem>
                            <NavLink href="booking">Reservations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Order">Order&nbsp;Online</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Login">Login</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Col>
                </Navbar>
            </Row>
        </Container>
    )
}

export default Header