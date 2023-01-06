import { ToastContainer } from 'react-toastify';
import Routers from 'routes';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
	return (
		<>
			<ToastContainer />
			<Routers />
		</>
	);
};

export default App;
