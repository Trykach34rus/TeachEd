import { useState } from 'react'
import st from './MainVideos.module.scss'

type Props = {}

export default function MainVideos({}: Props) {
	const [videoErrors, setVideoErrors] = useState<boolean[]>([
		false,
		false,
		false,
	])

	const handleVideoError = (index: number) => {
		const newErrors = [...videoErrors]
		newErrors[index] = true
		setVideoErrors(newErrors)
	}

	const videoSources = [
		{
			src: 'https://www.youtube.com/watch?v=o_XVt5rdpFY',
			title: 'The secrets of learning a new language | Lýdia Machová | TED',
			backupText: 'AI in language education overview',
		},
		{
			src: 'https://www.youtube.com/watch?v=kRusEnCBRRA',
			title: 'Oxford, How Many Languages Do You Speak?',
			backupText: 'Future of AI in language learning',
		},
		{
			src: 'https://www.youtube.com/watch?v=0IsrlP7yejw',
			title:
				'Harbin Meijia Foreign Language School: Inspiring Students Through Music, Art, Science and Innovation',
			backupText: 'How AI transforms language acquisition',
		},
	]

	return (
		<div className={st.root}>
			<p className={st.title}>TRUSTED BY EDUCATORS WORLDWIDE</p>
			<div className={st.videoContainer}>
				{videoSources.map((video, index) => (
					<div key={index} className={st.video}>
						{!videoErrors[index] ? (
							<iframe
								src={video.src}
								title={video.title}
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								onError={() => handleVideoError(index)}
							></iframe>
						) : (
							<div className={st.videoPlaceholder}>
								<p>Video unavailable</p>
								<p>{video.backupText}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
