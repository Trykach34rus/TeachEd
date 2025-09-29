import { useState } from 'react'
import defaultAvatar from '../../../assets/Kris.png'
import ProfilModal from '../../../Commponets/Modals/ProfilModal/ProfilModal'
import { useAppSelector } from '../../../redux/store'
import st from './DasboardMiniProfil.module.scss'

type Props = {}

export default function DasboardMiniProfil({}: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { userInfo } = useAppSelector(state => state.user)

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className={st.root}>
			<button className={st.modalButton} onClick={handleOpenModal}>
				<img
					src={userInfo?.avatar || defaultAvatar}
					alt='User Avatar'
					className={st.avatarImage}
				/>
			</button>

			<ProfilModal open={isModalOpen} onClose={handleCloseModal} />
		</div>
	)
}
