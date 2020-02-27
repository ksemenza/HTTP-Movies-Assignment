import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
export default class SavedList extends Component {
  
  render() {
    return (
      <div className='save-list'>
      <div className="saved-list-top">

        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => {
          return (
            <NavLink
              to={`/movies/${movie.id}`}
              key={movie.id}
              activeClassName="saved-active"
            >
              <span className="saved-movie">{movie.title}</span>
            </NavLink>
          );
        })}
        </div>
        <div className='save-list-bottom'>
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
        <div className="add-button">
          <Link to="/add-movie">Add Movie</Link>
        </div>
        </div>
      </div>
    );
  }
}
