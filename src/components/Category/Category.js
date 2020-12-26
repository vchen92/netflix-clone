import React, { useState, useEffect } from 'react';
import axios from './../../axios';

import './Category.css';
import Poster from './Poster/Poster';

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
					<Poster
						key={movie.id}
						movie={movie}
						isLargeRow={isLargeRow}
					/>
				))}
			</div>
			{/* container -> posters */}
		</div>
	);
}

export default Category;
