import closeImage from '../../../assets/closeImage.svg'
import kris from '../../../assets/Kris.png'
import logo from '../../../assets/TeachEd-Logo-Black.svg'
import st from './ProfilModal.module.scss'

interface Props {
	open: boolean
	onClose: () => void
}

interface MenuItem {
	key: string
	label: string
	onClick: () => void
}
const menuItems: MenuItem[] = [
	{
		key: 'settings',
		label: 'Settings',
		onClick: () => console.log('Settings clicked'),
	},
	{
		key: 'subscription',
		label: 'Subscription',
		onClick: () => console.log('Subscription clicked'),
	},
	{
		key: 'journal',
		label: 'Journal',
		onClick: () => console.log('Journal clicked'),
	},
	{
		key: 'logout',
		label: 'Log out',
		onClick: () => console.log('Log out clicked'),
	},
]

export default function ProfilModal({ open, onClose }: Props) {
	if (!open) return null

	return (
		<div className={st.root} onClick={onClose}>
			<div className={st.modalContent} onClick={e => e.stopPropagation()}>
				<div className={st.logoAndClose}>
					<img src={logo} alt='' className={st.logo} />
					<button onClick={onClose} className={st.close}>
						Close <img src={closeImage} alt='' className={st.closeImage} />
					</button>
				</div>

				<div className={st.imageAndName}>
					<img src={kris} alt='' className={st.userImage} />
					<div className={st.nameContainer}>
						<p className={st.firstName}>Christina</p>
						<p className={st.secondName}>Novik</p>
					</div>
				</div>

				<div className={st.menuButtons}>
					{menuItems.map(item => (
						<button
							key={item.key}
							className={st.menuButton}
							onClick={item.onClick}
						>
							{item.label}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
