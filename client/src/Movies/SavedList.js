import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from "axios";


export default class SavedList extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     list: [this.props.list]
  //   }
  // }



  render() {
    console.log()
    return (
      <div className='save-list'>
      <div className="saved-list-top">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => {
        
          return (
            <div>
            <NavLink
              to={`/movies/${movie.id}`}
              key={movie.id}
              activeClassName="saved-active">
              <span className="saved-movie">{movie.title}</span>
            </NavLink>
            {/* <button onClick={() => this.removeItem(...this.props.list)}>x</button> */}
            </div>
          );
        })}
     
        </div>
        <div className='save-list-bottom'>
        <div className="home-button">
          <Link className='home' to="/">Home</Link>
        </div>
        <div className="add-button">
          <Link className='add' to="/add-movie">Add Movie</Link>
        </div>
        </div>
      </div>
    );
  }
}
