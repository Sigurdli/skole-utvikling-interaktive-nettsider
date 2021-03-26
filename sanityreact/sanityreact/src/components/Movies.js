import React, { useState } from 'react';
import { getMovies } from '../utility/movieService.js';
import Movie from './Movie.js';

const Movies = () => {
    
    const [data, setData] = useState([]);
    
    const clickHandler = async () => {
        const movies = await getMovies();
        setData(movies)
    };

    return (
        <>
        <h2>Movie</h2>
        <button type="button" onClick={clickHandler}>Button</button>
        {data.map((movie, index) =>
        <Movie key={index} title={movie.title} actor={movie.actor} />
        )}
        </>
    );
}

export default Movies;