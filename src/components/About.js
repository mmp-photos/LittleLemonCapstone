import React from 'react';
import ma1 from '../assets/images/Mario and Adrian A.jpg';
import ma2 from '../assets/images/Mario and Adrian b.jpg';

const About = () => {
    return(
        <section className="two-col paddingb-3">
            <article>
                <h1>About</h1>
                <p>Meet Mario and Adrian, the dynamic duo behind Little Lemon, your new favorite family Italian restaurant in the vibrant city of Chicago. Hailing from the charming streets of Italy, these passionate food enthusiasts decided to bring the authentic flavors of their homeland to the Windy City.</p>
                <p>It all began with a dream – a dream to create a warm and inviting space where families and friends could gather to savor the rich and comforting tastes of Italian cuisine. Mario and Adrian's journey led them to the bustling streets of Chicago, where they fell in love with the city's diverse culture and welcoming spirit.</p>
            </article>
            <div style={{paddingTop: "3.5rem"}}>
                <img className="about1" src={ma1} alt="Mario and Adrian in the kitchen" />
                <img className="about2" src={ma2} alt="Mario and Adrian in the kitchen" />
            </div>
        </section>
    )
}

export default About