import React from 'react';
import Reviews2 from '../elements/Reviews.js';
import { Container, Row, Col } from 'reactstrap';
import { reviewsData } from '../../assets/data/reviews.js'

const Reviews = () => {
    const { innerWidth: width, innerHeight: height } = window;
        console.log(width);
    return (
        <section id="Reviews">
            <h1 className="grid-span-6">Reviews</h1>
            {width >= 600
                ? <div></div>
                : null
            }
            {reviewsData.map((item) => (
                <div className="padding-1" key={item.rating}>
                    <Reviews2 item={item} />
                </div>
            ))}
        </section>
    );
};

export default Reviews