// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
    <div className="review-list">
    <ul>
      {reviews.map(review=>{ 
          return (
          <li className="review">
           {review.headline}
          </li>
          )
      })}
    </ul>
      
    </div>
    );
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews
