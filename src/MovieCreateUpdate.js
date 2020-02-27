import React, { Component } from  'react';
import MoviesService from "./MoviesService";
const moviesService = new MoviesService();

class MovieCreateUpdate extends Component {

    constructor(props) {
        super(props);
        var year = props.release_year;
        var yearIsValid = this.validateYear(year);

        this.state = {year: year, yearValid: yearIsValid};

        this.onYearChange = this.onYearChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      validateYear(year) {
        return year >= 0;
      }

      onYearChange(e) {
        var val = e.target.value;
        var valid = this.validateYear(val);
        this.setState({year: val, yearValid: valid})
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          moviesService.getMovie(params.pk).then((c)=>{
            this.refs.title.value = c.title;
            this.refs.release_year.value = c.release_year;
            this.refs.director.value = c.director;
            this.refs.writer.value = c.writer;
            this.refs.genre.value = c.genre;
            this.refs.description.value = c.description;
            this.refs.country.value = c.country;
            this.refs.rating.value = c.rating;
            this.refs.box_office.value = c.box_office;
          })
        }
      }

      handleCreate(){
        moviesService.createMovie(
          {
            "title": this.refs.title.value,
            "release_year": this.refs.release_year.value,
            "director": this.refs.director.value,
            "writer": this.refs.writer.value,
            "genre": this.refs.genre.value,
            "description": this.refs.description.value,
            "country": this.refs.country.value,
            "rating": this.refs.rating.value,
            "box_office": this.refs.box_office.value,
        }
        ).then((result)=>{
          alert("Movie created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }

      handleUpdate(pk){
        moviesService.updateMovie(
          {
            "pk": pk,
            "title": this.refs.title.value,
            "release_year": this.refs.release_year.value,
            "director": this.refs.director.value,
            "writer": this.refs.writer.value,
            "genre": this.refs.genre.value,
            "description": this.refs.description.value,
            "country": this.refs.country.value,
            "rating": this.refs.rating.value,
            "box_office": this.refs.box_office.value,
        }
        ).then((result)=>{
          console.log(result);
          alert("Movie updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }

      render() {
        var yearColor = this.state.yearValid===true?"green":"red";
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Title:</label>
              <input className="form-control" type="text" ref='title'/>

            <label>
              Release year:</label>
              <input className="form-control" type="text" value={this.state.year} onChange={this.onYearChange} ref='release_year' style={{borderColor:yearColor}} />

             <label>
               Director:</label>
               <input className="form-control" type="text" ref='director'/>

             <label>
               Writer:</label>
               <input className="form-control" type="text" ref='writer'/>

             <label>
               Genre:</label>
               <input className="form-control" type="text" ref='genre'/>

             <label>
               Description:</label>
               <input className="form-control" type="text" ref='description'/>

             <label>
               Country:</label>
               <input className="form-control" type="text" ref='country'/>

            <label>
              Rating:</label>
              <input className="form-control" type="text" ref='rating'/>

            <label>
              Box office:</label>
              <input className="form-control" type="text" ref='box_office'/>


            <input className="btn btn-primary" type="submit" value="Submit" />

            </div>
          </form>
        );
      }
}

export default MovieCreateUpdate;