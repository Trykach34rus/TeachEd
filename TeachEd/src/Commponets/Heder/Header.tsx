import { useState } from 'react'
import logo from '../../assets/TeachEd-Logo (1).svg'

import st from './Header.module.scss'

const navItems = ['Blog', 'Events', 'About us', 'Pricing', 'Contact us']

export default function Header({}) {
	const [active, setActive] = useState<string>('Contact us')

	return (
		<header className={st.root}>
			<nav className={st.nav}>
				{navItems.map(item => (
					<button
						key={item}
						onClick={() => setActive(item)}
						className={`${st.navItem} ${active === item ? st.active : ''}`}
					>
						{item}
						{active === item && <span className={st.underline}></span>}
					</button>
				))}
				<div className={st.logo}>
					<img src={logo} alt='logo' />
				</div>
			</nav>
			<div className={st.right}>
				<button className={st.lang}>🌐 English</button>
				<button className={st.signup}>Sign Up</button>
			</div>
		</header>
	)
}
