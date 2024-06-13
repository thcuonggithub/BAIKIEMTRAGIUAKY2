import React from 'react';

const MovieCard = ({ movie, onClick }) => {
    return (
        <div className="movie-card" onClick={() => onClick(movie)}>
            <img src={movie.image} alt={movie.movieName} />
            <p>{movie.movieName}</p>
            <p>Episode {movie.episode}</p>
        </div>
    );
}

export default MovieCard;
