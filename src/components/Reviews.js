import React from 'react';
import Reviews2 from './elements/Reviews.js';
import { reviewsData } from '../assets/data/reviews.js'


const Reviews = () => {
    return(
        <section id="reviews">
            <h1 className="grid-span-6">Reviews</h1>
            {reviewsData.map((item) => {
                return(
                    <div className="grid-span-2 padding-4" key={item.id}>
                        <Reviews2 item={item} />
                    </div>
                    )
                })}
        </section>
    )
}

export default Reviews