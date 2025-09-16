import { useNavigate } from 'react-router-dom'
import arrow from '../../assets/Arrow.svg'
import latestImage1 from '../../assets/Latest-image-1.png'
import userAvatar1 from '../../assets/user-avatar-1.png'
import st from './Latest.module.scss'
type Props = {}

const latestObj = [
	{
		img: latestImage1,
		category: 'Category #1',
		title: 'VR learning: virtual reality in the classroom',
		description:
			'Explore how virtual reality is transforming the classroom by immersing students in interactive, 3D learning environments. Discover the benefits of VR in education, from enhancing engagement to providing hands-on experiences in subjects like science, history, and art.',
		userAvatar: userAvatar1,
		userName: 'Eva Bens',
		createdDate: '14.04.2024',
		link: 'Read more',
	},
	{
		img: latestImage1,
		category: 'Category #2',
		title:
			'Gamification of online education: turning remote lessons into exciting adventures',
		description:
			'Learn how gamification is making online education more engaging by turning lessons into interactive, game-like experiences. Discover strategies that educators use to motivate students, enhance participation, and make remote learning both fun and effective.',
		userAvatar: userAvatar1,
		userName: 'Eva Bens',
		createdDate: '14.04.2024',
		link: 'Read more',
	},
	{
		img: latestImage1,
		category: 'Category #3',
		title: 'Adaptive learning: the new challenge of 2024?',
		description:
			'Explore how adaptive learning is set to reshape education in 2024 by offering personalized learning paths for students. This approach uses AI to adjust content and pacing based on individual progress, making education more tailored and effective than ever before.',
		userAvatar: userAvatar1,
		userName: 'Eva Bens',
		createdDate: '14.04.2024',
		link: 'Read more',
	},
]

export default function Latest({}: Props) {
	const navigate = useNavigate()
	return (
		<div className={st.root}>
			<h1 className={st.latestTitle}>LATEST UPDATES</h1>
			<h4 className={st.acquaintance}>
				Explore our most recent updates on the Blog
			</h4>
			<div className={st.latestContainer}>
				{latestObj.map((latest, index) => (
					<div key={index} className={st.card}>
						<img src={latest.img} alt={latest.title} className={st.image} />
						<div className={st.newsContainer}>
							<p className={st.category}>{latest.category}</p>
							<p className={st.title}>{latest.title}</p>
							<p className={st.description}>{latest.description}</p>
						</div>
						<div className={st.userContainer}>
							<img src={latest.userAvatar} alt='Avatar' />
							<p className={st.userName}>{latest.userName}</p>
							<p className={st.createdDate}>{latest.createdDate}</p>
							<button className={st.link} onClick={() => navigate('/blog')}>
								Read more <img src={arrow} />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
