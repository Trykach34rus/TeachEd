import { useState } from 'react'
import DashboardMiniProfile from '../../Commponets/DashboardComponets/DasboardMiniProfil/DasboardMiniProfil'
import LocalWhiteboard from '../../Commponets/Whiteboard/Whiteboard'
import plus from '../../assets/Plas.svg'
import st from './WhiteboardPage.module.scss'

type Props = {}

type UploadedFile = {
	file: File
	type: string
	url: string
	content?: string
}

const buttonObj = [
	{
		img: plus,
		title: '+ Images',
		type: 'image',
		accept: 'image/*',
	},
	{
		img: plus,
		title: '+ Gif',
		type: 'gif',
		accept: 'image/gif',
	},
	{
		img: plus,
		title: '+ Video',
		type: 'video',
		accept: 'video/*',
	},
	{
		img: plus,
		title: '+ Text',
		type: 'text',
		accept: '.txt,.doc,.docx',
	},
	{
		img: plus,
		title: '+ Quiz',
		type: 'quiz',
		accept: '.json',
	},
	{
		img: plus,
		title: '+ Materials',
		type: 'material',
		accept: '.pdf,.ppt,.pptx',
	},
]

export default function WhiteboardPage({}: Props) {
	const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
	const [isWhiteboardActive, setIsWhiteboardActive] = useState(false)

	const handleFileUpload = (fileType: string, accept: string) => {
		const input = document.createElement('input')
		input.type = 'file'
		input.accept = accept
		input.multiple = true

		input.onchange = async (e: Event) => {
			const target = e.target as HTMLInputElement
			const files = target.files

			if (files && files.length > 0) {
				const newFiles: UploadedFile[] = []

				for (const file of Array.from(files)) {
					const url = URL.createObjectURL(file)
					let content: string | undefined

					if (fileType === 'text' || fileType === 'quiz') {
						content = await file.text()
					} else if (
						fileType === 'material' &&
						file.type === 'application/pdf'
					) {
					}

					newFiles.push({
						file,
						type: fileType,
						url,
						content,
					})
				}

				setUploadedFiles(prev => [...prev, ...newFiles])
			}
		}

		input.click()
	}

	const activateWhiteboard = () => {
		setIsWhiteboardActive(true)
	}

	return (
		<div className={st.root}>
			<DashboardMiniProfile />
			<div className={st.container}>
				<div className={st.sidebar}>
					<div className={st.inputContainer}>
						<input type='text' placeholder='Search materials...' />
						<button className={st.searchButton}>Search</button>
					</div>
					<div className={st.buttonContainer}>
						<h2>Tools</h2>
						<div className={st.buttonsGrid}>
							{buttonObj.map((button, index) => (
								<div className={st.buttonTemplate} key={index}>
									<button
										className={st.button}
										onClick={() => handleFileUpload(button.type, button.accept)}
									>
										<img src={button.img} alt={button.title} />
									</button>
									<p className={st.buttonName}>{button.title}</p>
								</div>
							))}
						</div>
					</div>

					<div className={st.activateSection}>
						<button className={st.activateButton} onClick={activateWhiteboard}>
							🎨 Активировать Whiteboard
						</button>
					</div>
					{uploadedFiles.length > 0 && (
						<div className={st.uploadedFiles}>
							<h3>Загруженные файлы:</h3>
							<div className={st.filesList}>
								{uploadedFiles.map((file, index) => (
									<div key={index} className={st.fileItem}>
										<span>{file.file.name}</span>
										<span className={st.fileType}>({file.type})</span>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Whiteboard */}
				<div className={st.whiteboardSection}>
					{!isWhiteboardActive ? (
						<div className={st.placeholder}>
							<div className={st.placeholderContent}>
								<h2>🎨 Whiteboard</h2>
								<p>Нажмите кнопку ниже чтобы активировать доску</p>
								<button
									className={st.activateCenterButton}
									onClick={activateWhiteboard}
								>
									Активировать Whiteboard
								</button>
							</div>
						</div>
					) : (
						<LocalWhiteboard
							uploadedFiles={uploadedFiles}
							width={804}
							height={941}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
