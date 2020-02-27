import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  UsersList  from  './UsersList'
import  UserCreateUpdate  from  './UserCreateUpdate'
import MoviesList from "./MoviesList";
import  './App.css';
import MovieCreateUpdate from "./MovieCreateUpdate";
import ReviewsList from "./ReviewsList";
import ReviewCreateUpdate from "./ReviewCreateUpdate";


const BaseLayout = () => (
  <div className="container-fluid">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">MovieDB</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/users">USERS</a>
      <a className="nav-item nav-link" href="/user">CREATE USER</a>
      <a className="nav-item nav-link" href="/movies">MOVIES</a>
      <a className="nav-item nav-link" href="/movie">CREATE MOVIE</a>
      <a className="nav-item nav-link" href="/review">CREATE REVIEW</a>


    </div>
  </div>
</nav>

    <div className="content">
      <Route path="/users" exact component={UsersList} />
      <Route path="/user/:pk" component={UserCreateUpdate} />
      <Route path="/user/" exact component={UserCreateUpdate} />
      <Route path="/movies/" exact component={MoviesList} />
      <Route path="/movie/" exact component={MovieCreateUpdate} />
      <Route path="/movie/:pk" component={MovieCreateUpdate} />
      <Route path="/review/:movie_id" component={ReviewsList} />
      <Route path="/review/" exact component={ReviewCreateUpdate} />


    </div>

  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    );
  }
}

export default App;