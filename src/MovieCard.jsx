import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div></div>
            <div>
                <img  width='100%' height ='100
                %'src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>   
            <div>
                <span>{movie.Type}</span>
                <p>{movie.Year}</p>
                {/* <p>{movie.Genre}</p> */}
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}
export default MovieCard;