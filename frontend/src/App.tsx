import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import ContactUs from './Pages/ContactUs'
import Events from './Pages/Events'
import Journal from './Pages/Journal/Journal'
import Main from './Pages/Main'
import NewBoard from './Pages/NewBoard/NewBoard'
import Pricing from './Pages/Pricing'
import TeacherSettings from './Pages/TeacherSettings/TeacherSettings'
import WhiteboardPage from './Pages/WhiteboardPage/WhiteboardPage'
// import WhiteboardPage from './Pages/WhiteboardPage/WhiteboardPage'

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
					<Route path='/teacher-settings' element={<TeacherSettings />} />
					<Route path='/journal' element={<Journal />} />
					<Route path='/whiteboard' element={<WhiteboardPage />} />
					<Route path='/new-board' element={<NewBoard />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</div>
		</>
	)
}
