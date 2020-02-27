import React, { Component } from  'react';
import MoviesService from "./MoviesService";
const moviesService = new MoviesService();

class MoviesList extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            movies: [],
            nextPageURL: ''
        };
        this.handleDelete  =  this.handleDelete.bind(this);
        this.nextPage = this.nextPage.bind(this);

    }

    componentDidMount() {
        var self = this;
        moviesService.getMovies().then(function (result) {
            console.log(result);
            self.setState({movies: result.data, nextPageURL: result.nextlink})
        });
    }

    handleDelete(e,pk) {
        var self = this;
        moviesService.deleteMovie({pk: pk}).then(() => {
            var newArr = self.state.movies.filter(function (obj) {
                return obj.pk !== pk;
            });
            self.setState({movies: newArr})
        });
    }

    nextPage(){
        var self = this;
        console.log(this.state.nextPageURL);
        moviesService.getMovieByURL(this.state.nextPageURL).then((result) => {
            self.setState({movies: result.data, nextPageURL: result.nextlink})
        });
    }

    render() {

    return (
        <div  className="movies--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Release year</th>
                <th>Director</th>
                <th>Writer</th>
                <th>Genre</th>
                <th>Description</th>
                <th>Country</th>
                <th>Rating</th>
                <th>Box office</th>
            </tr>
            </thead>
            <tbody>
            {this.state.movies.map( c  =>
                <tr  key={c.pk}>
                    <td>{c.pk} <a  href={"/review/" + c.pk}>📜</a></td>
                <td>{c.title}</td>
                <td>{c.release_year}</td>
                <td>{c.director}</td>
                <td>{c.writer}</td>
                <td>{c.genre}</td>
                <td>{c.description}</td>
                <td>{c.country}</td>
                <td>{c.rating}</td>
                <td>{c.box_office}</td>
                <td>
                <button  onClick={(e)=>  this.handleDelete(e,c.pk) }>Delete</button>
                <a  href={"/movie/" + c.pk}> Update</a>
                </td>
            </tr>)}
            </tbody>
            </table>
            <button className="btn btn-primary" onClick={ this.nextPage }>Next</button>
        </div>
        );
  }
}
export default MoviesList;

