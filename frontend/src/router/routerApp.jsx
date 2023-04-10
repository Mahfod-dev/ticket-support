import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home,Login,Register } from '../pages'
import { Header } from '../components/Header';




const RouterApp = () => {
  return (
		<div className='container'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
  );
}
export default RouterApp