import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/home';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Route path="/">
				<Home />
			</Route>
		</BrowserRouter>
	);
};

export default App;
