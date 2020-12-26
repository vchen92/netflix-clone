import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import requests from '../../requests';

import './Banner.css';

const base_image_url = 'https://image.tmdb.org/t/p/original';

function Banner() {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get(requests.fetchNetflixOriginals.url);
			const res = req.data.results;

			setMovie(res[Math.floor(Math.random() * (res.length - 1))]);
		}

		fetchData();
	}, []);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1).trim() + '...' : str;
	};

	return (
		<header
			className="banner"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("${base_image_url}${movie?.backdrop_path}")`,
				backgroundPosition: 'center center',
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.name || movie?.title || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<div className="banner__button">Play</div>
					<div className="banner__button">My List</div>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</div>
		</header>
	);
}

export default Banner;
