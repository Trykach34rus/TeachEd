import { NavLink } from 'react-router-dom'
import COMMUNITY from '../../../assets/COMMUNITY.svg'
import JOURNAL from '../../../assets/JOURNAL.svg'
import logOut from '../../../assets/LogOut.svg'
import plas from '../../../assets/Plas.svg'
import SCHEDULE from '../../../assets/SCHEDULE.svg'
import logo from '../../../assets/TeachEd-Logo-Black.svg'
import st from './DasboardAside.module.scss'

type Props = {}

type NavItem = {
	id: number
	text: string
	icon: string
	path: string
}

export default function DasboardAside({}: Props) {
	const navItems: NavItem[] = [
		{ id: 1, text: 'CREATE NEW BOARD', icon: plas, path: '/new-board' },
		{ id: 2, text: 'SCHEDULE', icon: SCHEDULE, path: '/schedule' },
		{ id: 3, text: 'COMMUNITY', icon: COMMUNITY, path: '/community' },
		{ id: 4, text: 'JOURNAL', icon: JOURNAL, path: '/journal' },
	]

	return (
		<aside className={st.root}>
			<img src={logo} alt='TeachEd Logo' className={st.logo} />
			<nav className={st.navContainer}>
				{navItems.map(item => (
					<NavLink
						to={item.path}
						key={item.id}
						className={({ isActive }) =>
							isActive ? `${st.newBoard} ${st.newBoardActive}` : st.newBoard
						}
					>
						<img src={item.icon} alt='' className={st.plas} />
						{item.text}
					</NavLink>
				))}
			</nav>
			<div className={st.logOutContainer}>
				<p className={st.logOut}>
					<img src={logOut} alt='' />
					LOG OUT
				</p>
			</div>
		</aside>
	)
}
