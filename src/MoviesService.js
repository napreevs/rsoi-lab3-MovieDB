import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class MoviesService{

    constructor(){}


    getMovies() {
        const url = `${API_URL}/api/movies/`;
        return axios.get(url).then(response => response.data);
    }
    getMovieByURL(link) {
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getMovie(pk) {
        const url = `${API_URL}/api/movies/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    createMovie(movie) {
        const url = `${API_URL}/api/movies/`;
        return axios.post(url, movie);
    }
    deleteMovie(movie) {
        const url = `${API_URL}/api/movies/${movie.pk}`;
        return axios.delete(url);
    }
    updateMovie(movie) {
        const url = `${API_URL}/api/movies/${movie.pk}`;
        return axios.put(url, movie);
    }

};