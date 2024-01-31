import React from 'react';
import Reviews2 from '../elements/Reviews.js';
import { Container, Row, Col } from 'reactstrap';
import { reviewsData } from '../../assets/data/reviews.js'

const Reviews = () => {
    return(
        <section id="reviews">
                    <h1 className="grid-span-6">Reviews</h1>
                    <div></div>
            {reviewsData.map((item) => {
                return(
                    <div className="padding-1">
                        <Reviews2 key={item.name} item={item} />
                    </div>
                    )
                })}
        </section>
    )
}

export default Reviews