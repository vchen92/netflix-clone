import React, { useState, useEffect } from 'react';
import axios from './../../axios';

import './Category.css';

const base_image_url = 'https://image.tmdb.org/t/p/original/';

function Category({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get(fetchUrl);
			setMovies(req.data.results);
			return req;
		}

		fetchData();
	}, [fetchUrl]);

	return (
		<div className="category">
			<h2>{title}</h2>

			<div className="category__posters">
				{movies.map(movie => (
					<img
						key={movie.id}
						className={`category__poster ${
							isLargeRow && 'category__posterLarge'
						}`}
						src={
							base_image_url +
							(isLargeRow
								? movie.poster_path
								: movie.backdrop_path)
						}
						alt={movie.name}
					/>
				))}
			</div>
			{/* container -> posters */}
		</div>
	);
}

export default Category;
