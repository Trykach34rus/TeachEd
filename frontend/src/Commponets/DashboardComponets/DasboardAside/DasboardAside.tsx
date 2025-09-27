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
}

export default function DasboardAside({}: Props) {
	const navItems: NavItem[] = [
		{ id: 1, text: 'CREATE NEW BOARD', icon: plas },
		{ id: 2, text: 'SCHEDULE', icon: SCHEDULE },
		{ id: 3, text: 'COMMUNITY', icon: COMMUNITY },
		{ id: 4, text: 'JOURNAL', icon: JOURNAL },
	]

	return (
		<aside className={st.root}>
			<img src={logo} alt='TeachEd Logo' className={st.logo} />
			<nav className={st.navContainer}>
				{navItems.map(item => (
					<div key={item.id} className={st.newBoard}>
						<img src={item.icon} alt='' className={st.plas} />
						{item.text}
					</div>
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
