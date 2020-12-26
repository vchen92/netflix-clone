import React, { useState, useEffect } from 'react';
import axios from './../../axios';
import Poster from './Poster/Poster';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import './Category.css';

const opts = {
	height: '390',
	width: '100%',
	playerVars: {
		autoplay: 1,
	},
};

function Category({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState('');

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get(fetchUrl);
			setMovies(req.data.results);
			return req;
		}

		fetchData();
	}, [fetchUrl]);

	const handleClick = movie => {
		if (trailerUrl) {
			setTrailerUrl('');
		} else {
			movieTrailer(
				movie?.name || movie?.title || movie?.original_title || ''
			)
				.then(url => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch(err => console.log(err.message));
		}
	};

	return (
		<div className="category">
			<h2 className="category__title">{title}</h2>

			<div className="category__posters">
				{movies.map(movie => (
					<Poster
						key={movie.id}
						movie={movie}
						isLargeRow={isLargeRow}
						onClick={handleClick}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
}

export default Category;
