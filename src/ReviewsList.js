import React, { Component } from  'react';
import ReviewsService from "./ReviewsService";
const reviewsService = new ReviewsService();

class ReviewsList extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            reviews: []
        };
    }
    componentDidMount(){
        var self = this;
        const { match: { params } } = this.props;
        if(params && params.movie_id)
        {
          reviewsService.getMovieReviews(params.movie_id).then( function(result) {
            console.log(result);
            self.setState({reviews: result.data})
        });
        }
      }


    render() {

    return (
        <div  className="reviews--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>Movie id</th>
                <th>User id</th>
                <th>Rating</th>
                <th>Content</th>
            </tr>
            </thead>
            <tbody>
            {this.state.reviews.map( c  =>
                <tr  key={c.movie_id}>
                    <td>{c.movie_id}</td>
                <td>{c.user_id}</td>
                <td>{c.rating}</td>
                <td>{c.content}</td>
            </tr>)}
            </tbody>
            </table>
        </div>
        );
  }
}
export default ReviewsList;

