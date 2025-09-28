import { useState } from 'react'
import kris from '../../../assets/Kris.png'
import ProfilModal from '../../../Commponets/Modals/ProfilModal/ProfilModal'
import st from './DasboardMiniProfil.module.scss'

type Props = {}

export default function DasboardMiniProfil({}: Props) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className={st.root}>
			<button className={st.modalButton} onClick={handleOpenModal}>
				<img src={kris} alt='' />
			</button>

			{/* Модальное окно */}
			<ProfilModal open={isModalOpen} onClose={handleCloseModal} />
		</div>
	)
}
