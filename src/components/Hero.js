import React from 'react';
import { Button } from 'react-bootstrap';
import heroImage from '../assets/images/restauranfood.jpg';

const Hero = () => {
    return(
        <section className="hero two-col">
            <article>
                <h1 className="yellow">Little Lemon</h1>
                <h2 className="white">Chicago</h2>
                <p className="white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button style={{backgroundColor: "#F4CE14", color: "#495E57"}} >
                    Reserve a table
                </Button>
            </article>
            <img src={heroImage} alt="Dinner" />
        </section>
    )
}

export default Hero