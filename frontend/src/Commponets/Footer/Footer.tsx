import logoBlack from '../../assets/TeachEd-Logo (1).svg'
import bg from '../../assets/background-enhance.png'
import st from './Footer.module.scss'

import { useNavigate } from 'react-router-dom'

const navItems = [
	{ path: '/home', label: 'Home' },
	{ path: '/blog', label: 'Blog' },
	{ path: '/events', label: 'Events' },
	{ path: '/about', label: 'About us' },
	{ path: '/pricing', label: 'Pricing' },
	{ path: '/contact', label: 'Contact us' },
]

export default function Footer() {
	const navigate = useNavigate()

	return (
		<footer className={st.root} style={{ backgroundImage: `url(${bg})` }}>
			<div className={st.container}>
				<div className={st.footerContent}>
					<img src={logoBlack} alt='TeachEd' />

					<nav className={st.footerMenu}>
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
				</div>
			</div>
		</footer>
	)
}
