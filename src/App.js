import './App.css';
import Category from './components/Category/Category';
import requests from './requests';
import Banner from './components/Banner/Banner';

function App() {
	return (
		<div className="app">
			{/* Nav */}
			<Banner />
			{Object.keys(requests).map(key => (
				<Category
					key={key}
					title={requests[key].title}
					fetchUrl={requests[key].url}
					isLargeRow={requests[key].title === 'Trending Now'}
				/>
			))}
		</div>
	);
}

export default App;
