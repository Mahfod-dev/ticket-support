import { BrowserRouter as Router } from "react-router-dom";
import RouterApp from "./router/routerApp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<Router>
			<RouterApp />
			<ToastContainer />
		</Router>
	);
}

export default App
