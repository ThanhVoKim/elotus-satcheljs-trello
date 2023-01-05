import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from 'pages/home';

const Routers = () => {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routers;
