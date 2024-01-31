import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/restauranfood.jpg';

const Hero = () => {
    return(
        <section className="hero two-col">
            <article>
                <h1 className="yellow">Little Lemon</h1>
                <h2 className="white">Chicago</h2>
                <p className="white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>
                        Reserve a table
                    </button>
            </article>
            <div>
            <img src={heroImage} alt="Dinner" />
            </div>
        </section>
    )
}

export default Hero