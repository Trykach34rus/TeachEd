import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoWhite from '../../assets/Second-Logo-Black.svg'
import logoBlack from '../../assets/TeachEd-Logo (1).svg'
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
	const [isLight, setIsLight] = useState<boolean>(false)

	useEffect(() => {
		if (location.pathname !== '/') {
			setIsLight(true)
			return
		}

		const onScroll = () => {
			setIsLight(window.scrollY > 0)
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [location.pathname])

	return (
		<header className={`${st.root} ${isLight ? st.light : st.dark}`}>
			<nav className={st.nav}>
				{navItems.map(item => (
					<button
						key={item.path}
						onClick={() => navigate(item.path)}
						className={st.navItem}
					>
						{item.label}
					</button>
				))}
			</nav>

			<div className={st.logo}>
				<img src={isLight ? logoWhite : logoBlack} alt='Logo' />
			</div>

			<div className={st.right}>
				<button className={st.lang}>🌐 English</button>
				<button className={st.signup}>Sign Up</button>
			</div>
		</header>
	)
}
