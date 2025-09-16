import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/TeachEd-Logo (1).svg'
import st from './Header.module.scss'

const navItems = [
	{ path: '/blog', label: 'Blog' },
	{ path: '/events', label: 'Events' },
	{ path: '/about', label: 'About us' },
	{ path: '/pricing', label: 'Pricing' },
	{ path: '/contact', label: 'Contact us' },
]

export default function Header() {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<header className={st.root}>
			<nav className={st.nav}>
				{navItems.map(item => (
					<button
						key={item.path}
						onClick={() => navigate(item.path)}
						className={`${st.navItem} ${
							location.pathname === item.path ? st.active : ''
						}`}
					>
						{item.label}
						{location.pathname === item.path && (
							<span className={st.underline}></span>
						)}
					</button>
				))}
				<div className={st.logo}>
					<img
						src={logo}
						alt='logo'
						onClick={() => navigate('/')}
						style={{ cursor: 'pointer' }}
					/>
				</div>
			</nav>
			<div className={st.right}>
				<button className={st.lang}>🌐 English</button>
				<button className={st.signup}>Sign Up</button>
			</div>
		</header>
	)
}
