// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
  
      reviews.map(review => {
        return (
        <div className="review">
          <p><a className="review-link" href={review.link.url}>{review.headline}</a></p>
        </div>
        )
      })
    )

}

MovieReviews.defaultProps = {
    reviews: []
  }

export default MovieReviews
