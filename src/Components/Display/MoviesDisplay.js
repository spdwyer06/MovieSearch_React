import React from 'react';
import Movie from './Movie';

// const MoviesDisplay = ({movie}) => {
const MoviesDisplay = (props) => {

    console.log(props.movies);

    return (
        <div>
            {props.movies.map((movie, i) => <Movie movie={movie} key={i} />)}
        </div>
    );
};

export default MoviesDisplay;