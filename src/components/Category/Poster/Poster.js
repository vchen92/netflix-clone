import React from 'react';
import './Poster.css';

const base_image_url = 'https://image.tmdb.org/t/p/original/';

function Poster({ movie, isLargeRow, onClick }) {
	const style = `poster ${isLargeRow && 'poster__large'}`;
	const url =
		base_image_url + (isLargeRow ? movie.poster_path : movie.backdrop_path);

	return (
		<img
			className={style}
			src={url}
			alt={movie.name}
			onClick={() => onClick(movie)}
		/>
	);
}

export default Poster;
