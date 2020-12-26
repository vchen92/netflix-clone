import './App.css';
import Category from './components/Category/Category';
import requests from './requests';

function App() {
	return (
		<div className="app">
			<h1>This is a netflix app!!!</h1>
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
