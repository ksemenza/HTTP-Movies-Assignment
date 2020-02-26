import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovieForm = props => {
    const [movieInput, updateMovieInput] = useState({title: '', director: '', metascore: '', star0: '', star1: '', star2: ''});
    
    //console.log(props.location.state);
    useEffect(()=> {
        updateMovieInput({title: props.location.state.title, 
           director: props.location.state.director,
           metascore: props.location.state.metascore,
           star0: props.location.state.stars[0],
           star1: props.location.state.stars[1],
           star2: props.location.state.stars[2]
            })
    }, [props.location.state]);


    const handleChange = e => {
        updateMovieInput({...movieInput, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const starArray = [];
        starArray.push(movieInput.star0);
        starArray.push(movieInput.star1);
        starArray.push(movieInput.star2);
        //console.log(starArray);
        const movieToSubmit = {title: movieInput.title, director: movieInput.director, metascore: movieInput.metascore, stars: starArray, id:props.match.params.id};
        console.log(movieToSubmit);
        console.log(props.match.params.id);
        axios.put(`http://localhost:5000/api/movies/${props.match.params.id}`, movieToSubmit)
            .then(res => {
                console.log(res);
                updateMovieInput({title: '', director: '', metascore: '', star0: '', star1: '', star2: ''});
                props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Edit Movie</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title: </label>
                <input type='text' name='title' value={movieInput.title} onChange={handleChange} /><br />

                <label htmlFor='director'>Director: </label>
                <input type='text' name='director' value={movieInput.director} onChange={handleChange} /><br />

                <label htmlFor='metascore'>Metascore: </label>
                <input type='number' name='metascore' value={movieInput.metascore} onChange={handleChange} /><br />
            
                <label htmlFor='star0'>Star: </label>
                <input type='text' name='star0' value={movieInput.star0} onChange={handleChange} /><br />

                <label htmlFor='star1'>Star: </label>
                <input type='text' name='star1' value={movieInput.star1} onChange={handleChange} /><br />

                <label htmlFor='star2'>Star: </label>
                <input type='text' name='star2' value={movieInput.star2} onChange={handleChange} /><br />

                <button type='submit'>Submit Changes</button>
            </form>
        </div>
    )
}

export default UpdateMovieForm;