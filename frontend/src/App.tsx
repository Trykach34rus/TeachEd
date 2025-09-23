import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import ContactUs from './Pages/ContactUs'
import Events from './Pages/Events'
import Main from './Pages/Main'
import Pricing from './Pages/Pricing'

export default function App() {
	return (
		<>
			<div className='content'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/events' element={<Events />} />
					<Route path='/about' element={<AboutUs />} />
					<Route path='/pricing' element={<Pricing />} />
					<Route path='/contact' element={<ContactUs />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</div>
		</>
	)
}
