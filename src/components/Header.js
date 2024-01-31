import React, { useState } from 'react';
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
    
    console.log("Header availableTimes:", availableTimes);

    return(
        <Container>
            <Row>
                <Navbar color="faded" light expand="md">
                <Col>
                    <NavbarBrand className="me-auto">
                        <a className="logo" href="/"><img src={logo} className="primary-logo" alt="Little Lemon Logo" /></a>
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
                            <NavLink href="/#Menu">Menu</NavLink>
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