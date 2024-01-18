import React from 'react';
import logo from '../assets/images/Asset16-4x.png';

const Nav = () => {
    return(
        <header>
            <img src={logo} alt="Little Lemon Logo" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav