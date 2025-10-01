import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logoWhite from '../../assets/Second-Logo-Black.svg'
import logoBlack from '../../assets/TeachEd-Logo (1).svg'
import closeImage from '../../assets/closeImage.svg'
import burger from '../../assets/iconamoon_menu-burger-horizontal.svg'
import SignInModal from '../Modals/SignInModal/SignInModal'
import SignUpModal from '../Modals/SignUpModal/SignUpModal'
import st from './Header.module.scss'

const navItems = [
	{ path: '/', label: 'Home' },
	{ path: '/blog', label: 'Blog' },
	{ path: '/events', label: 'Events' },
	{ path: '/about', label: 'About us' },
	{ path: '/pricing', label: 'Pricing' },
	{ path: '/contact', label: 'Contact us' },
]

export default function Header() {
	const [burgerOpen, setBurgerOpen] = useState<boolean>(false)
	const [activeModal, setActiveModal] = useState<'signin' | 'signup' | null>(
		null
	)
	const navigate = useNavigate()
	const location = useLocation()
	const [isLight, setIsLight] = useState<boolean>(false)

	useEffect(() => {
		if (location.pathname !== '/') {
			setIsLight(true)
			return
		}

		const onScroll = () => setIsLight(window.scrollY > 0)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [location.pathname])

	const openSignInModal = () => setActiveModal('signin')
	const closeModal = () => setActiveModal(null)

	const switchToSignUp = () => {
		setActiveModal('signup')
	}

	const switchToSignIn = () => {
		setActiveModal('signin')
	}

	const handleSettingsClick = () => {
		navigate('/teacher-settings')
		setBurgerOpen(false)
	}

	return (
		<>
			<header className={`${st.root} ${isLight ? st.light : st.dark}`}>
				<nav className={burgerOpen ? `${st.nav} ${st.nav_active}` : st.nav}>
					<button className={st.close} onClick={() => setBurgerOpen(false)}>
						Close <img src={closeImage} alt='' />
					</button>
					{navItems.map(item => (
						<button
							key={item.path}
							onClick={() => {
								navigate(item.path)
								setBurgerOpen(false)
							}}
							className={st.navItem}
						>
							{item.label}
						</button>
					))}
					<button className={st.langMobile} onClick={handleSettingsClick}>
						🌐 English
					</button>
				</nav>

				<div className={st.logo}>
					<img src={isLight ? logoWhite : logoBlack} alt='Logo' />
				</div>

				<div className={st.right}>
					<button className={st.lang} onClick={handleSettingsClick}>
						🌐 English
					</button>
					<button className={st.signup} onClick={openSignInModal}>
						Sign In
					</button>
					<button className={st.burger} onClick={() => setBurgerOpen(true)}>
						<img src={burger} alt='Open menu' />
					</button>
				</div>
			</header>

			<SignInModal
				isOpen={activeModal === 'signin'}
				onClose={closeModal}
				onSwitchToSignUp={switchToSignUp}
			/>

			<SignUpModal
				isOpen={activeModal === 'signup'}
				onClose={closeModal}
				onSwitchToSignIn={switchToSignIn}
			/>
		</>
	)
}
