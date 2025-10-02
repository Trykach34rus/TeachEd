import image1 from '../../assets/Jorney-image1.png'
import image2 from '../../assets/Jorney-image2.png'
import image3 from '../../assets/Jorney-image3..png'
import image4 from '../../assets/Jorney-image4.png'
import { JourneyItem } from '../../utils/type'
import st from './TeachingJourney.module.scss'

type Props = {}

const journeyObj: JourneyItem[] = [
	{
		img: image1,
		title: 'ASK',
		id: '01',
		description:
			'Start by asking yourself what you need to enhance your teaching experience. Identify the gaps in your current teaching methods and areas where you can leverage technology to improve efficiency and engagement.',
	},
	{
		img: image2,
		title: 'CREATE',
		id: '02',
		description:
			'Utilize TeachEd’s tools to create dynamic and interactive lessons tailored to your students’ needs. Make use of the platform’s resources to design engaging content that can be reused and customized.',
	},
	{
		img: image3,
		title: 'INSPIRE',
		id: '03',
		description:
			'Inspire your students and colleagues by delivering the lessons you’ve created using TeachEd’s platform. Engage them with interactive and multimedia content that keeps them motivated and interested in the subject. Utilize multimedia resources to capture and maintain students’ attention. Promote active participation through real-time quizzes, polls, and collaborative projects.',
	},
	{
		img: image4,
		title: 'SHARE',
		id: '04',
		description:
			'Share your successful strategies, lesson plans, and resources with fellow educators. Collaborate and learn from others within the TeachEd community to continuously improve your teaching practices.Access a professional development hub to stay updated with the latest teaching trends and technologies',
	},
]

export default function TeachingJourney({}: Props) {
	return (
		<div className={st.root}>
			<p className={st.title}>
				Your Teaching <br />
				Journey
			</p>


			<div className={st.container}>
				{journeyObj.map(journey => (
					<div key={journey.id} className={st.card}>
						<img
							src={journey.img}
							alt={journey.title}
							className={st.cardImage}
						/>
						<div>
							<h3 className={st.cardTitle}>
								{journey.title} <span> {journey.id} </span>
							</h3>
							<p className={st.cardDescription}>{journey.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
