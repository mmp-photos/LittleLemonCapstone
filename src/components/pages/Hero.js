import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/restauranfood.jpg';
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return(
        <section className="hero two-col">
            <article>
                <h1 className="yellow">Little Lemon</h1>
                <h2 className="white">Chicago</h2>
                <p className="white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button onClick={() => navigate("/booking")}>
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