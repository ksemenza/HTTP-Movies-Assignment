import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovieForm from './Movies/UpdateMovieForm';
import AddMovieForm from './Movies/AddMovieForm';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <h1 className='appTitle'>My Movies</h1>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route 
        path='/update-movie/:id' 
        render={props => {
          return <UpdateMovieForm {...props} />
      }}
      />
      <Route 
        path='/add-movie'
        component={AddMovieForm} />
    </>
  );
};

export default App;
