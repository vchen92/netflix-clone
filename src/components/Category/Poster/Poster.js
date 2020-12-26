import React from 'react';
import './Poster.css';

const base_image_url = 'https://image.tmdb.org/t/p/original/';

function Poster({ movie, isLargeRow }) {
	return (
		<img
			className={`poster ${isLargeRow && 'poster__large'}`}
			src={
				base_image_url +
				(isLargeRow ? movie.poster_path : movie.backdrop_path)
			}
			alt={movie.name}
		/>
	);
}

export default Poster;
