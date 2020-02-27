import React, { useState } from 'react';
import axios from 'axios';


const AddMovieForm = props => {
    const [movieInput, setMovieInput] = useState({title: '', director: '', metascore: '', star0: '', star1: '', star2: ''})
    
    const handleChange = e => {
        setMovieInput({...movieInput, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const starArray = [];
        starArray.push(movieInput.star0);
        starArray.push(movieInput.star1);
        starArray.push(movieInput.star2);
        //console.log(starArray);
        const movieToSubmit = {title: movieInput.title, director: movieInput.director, metascore: movieInput.metascore, stars: starArray};
    
        console.log(movieToSubmit);
        axios.post('http://localhost:5000/api/movies', movieToSubmit)
            .then(res => {
                console.log(res);
          
                props.history.push('/');
            
            })
            .catch(err => {
                console.log(err);
            })
    }

    const resetForm = () => {
            document.getElementById('movie-form').reset()
    }
    
    return (
        <div className='movie-add-cta'>
        <div className='movie-add-cta'>
            <h2>Add Movie</h2>
            </div>
            <form id='movie-form'  onSubmit={handleSubmit}>
                <label htmlFor='title'/>
                <input type='text' name='title' value={movieInput.title} onChange={handleChange} placeholder='Title'  /><br />

                <label htmlFor='director'/>
                <input type='text' name='director' value={movieInput.director} onChange={handleChange} placeholder='Director'/><br />

                <label htmlFor='metascore'/>
                <input type='number' name='metascore' value={movieInput.metascore} onChange={handleChange} placeholder='Metascore' /><br />
            
                <label htmlFor='star0'/>
                <input type='text' name='star0' value={movieInput.star0} onChange={handleChange} placeholder='Star' /><br />

                <label htmlFor='star1'/>
                <input type='text' name='star1' value={movieInput.star1} onChange={handleChange} placeholder='Co-Star' /><br />

                <label htmlFor='star2'/>
                <input type='text' name='star2' value={movieInput.star2} onChange={handleChange} placeholder='Supportive Role' /><br />

                <button onSubmit={resetForm} type='submit'>Save</button>
            </form>
        </div>
    )
}

export default AddMovieForm;