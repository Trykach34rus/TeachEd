import { useNavigate } from 'react-router-dom'
import closeImage from '../../../assets/closeImage.svg'
import defaultAvatar from '../../../assets/Kris.png'
import logo from '../../../assets/TeachEd-Logo-Black.svg'
import { useAppSelector } from '../../../redux/store'
import st from './ProfilModal.module.scss'

interface Props {
	open: boolean
	onClose: () => void
}

export default function ProfilModal({ open, onClose }: Props) {
	const { userInfo } = useAppSelector(state => state.user)
	const navigate = useNavigate()

	const handleSettingsClick = () => {
		navigate('/teacher-settings')
		onClose()
	}

	if (!open) return null

	return (
		<div className={st.root} onClick={onClose}>
			<div className={st.modalContent} onClick={e => e.stopPropagation()}>
				<div className={st.logoAndClose}>
					<img src={logo} alt='TeachEd Logo' className={st.logo} />
					<button onClick={onClose} className={st.close}>
						Close <img src={closeImage} alt='Close' className={st.closeImage} />
					</button>
				</div>

				<div className={st.imageAndName}>
					<img
						src={userInfo?.avatar || defaultAvatar}
						alt='User Avatar'
						className={st.userImage}
					/>
					<div className={st.nameContainer}>
						<p className={st.firstName}>{userInfo?.first_name || 'Chistina'}</p>
						<p className={st.secondName}>{userInfo?.last_name || 'Novik'}</p>
					</div>
				</div>

				<div className={st.menuButtons}>
					<button className={st.menuButton} onClick={handleSettingsClick}>
						Settings
					</button>
					<button className={st.menuButton}>Subscription</button>
					<button className={st.menuButton}>Journal</button>
					<button className={st.menuButton}>Log out</button>
				</div>
			</div>
		</div>
	)
}
