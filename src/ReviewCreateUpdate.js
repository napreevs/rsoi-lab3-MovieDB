import React, { Component } from  'react';
import ReviewsService from "./ReviewsService";
const reviewsService = new ReviewsService();


class ReviewCreateUpdate extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleCreate(){
        reviewsService.createMovieReview(
          {
            "user_id": this.refs.user_id.value,
            "movie_id": this.refs.movie_id.value,
            "rating": this.refs.rating.value,
            "content": this.refs.content.value
        }
        ).then((result)=>{
          alert("Review created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }

      handleSubmit(event) {
        const { match: { params } } = this.props;

        this.handleCreate();

        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              User id:</label>
              <input className="form-control" type="text" ref='user_id' />

            <label>
              Movie id:</label>
              <input className="form-control" type="text" ref='movie_id'/>

            <label>
              Rating:</label>
              <input className="form-control" type="text" ref='rating' />

            <label>
              Content:</label>
              <input className="form-control" type="text" ref='content' />
            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
      }
}

export default ReviewCreateUpdate;