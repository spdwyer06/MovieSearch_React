import React from 'react';
import styled from 'styled-components';

const Movie = (props) => {

    const MovieDiv = styled.div`
        margin: 5px;
        width: 300px;
        height: 500px;
        border-radius: 5px;
        text-align: center;
        background: #48b1bf;
    `;

    const Poster = styled.img`
        width: calc(100% - 20px);
        height: calc(70% - 10px);
        margin: 10px 10px 0 10px;
        border-radius: 5px;
    `;

    const Title = styled.h5`
        margin: 5px 0 0 0;
        color: white;
        `;

    const Description = styled.p`
        height: 20%;
        color: white;
        overflow-wrap: break-word;
        overflow: scroll;
    `;

    return (
        <MovieDiv>
            <Poster src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
            <Title>{props.movie.original_title}</Title>
            <Description>{props.movie.overview}</Description>
        </MovieDiv>
    );
};

export default Movie;