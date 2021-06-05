import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '', reviews: []

    };

    handleSearchTerm = (event) => {
        this.setState({ searchTerm: event.target.value });
    }



    submitEvent=(event)=>{
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(response => this.setState({ reviews: response.results }))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.submitEvent}>
                    <label className="review-search">Search Reviews</label>
                    <input type="text" onChange={this.handleSearchTerm}/>
                    <button type="submit" className="submitbtn"> Submit </button>

                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}


