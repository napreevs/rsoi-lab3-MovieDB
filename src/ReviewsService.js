import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class ReviewsService{

    constructor(){}

    getMovieReviews(movie_id) {
        const url = `${API_URL}/api/movies/${movie_id}/reviews/`;
        return axios.get(url).then(response => response.data);
    }
    createMovieReview(review) {
        const url = `${API_URL}/api/reviews/`;
        return axios.post(url, review);
    }

};