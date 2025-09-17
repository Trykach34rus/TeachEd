import image1 from '../../assets/Jorney-image1.png'
import vector35 from '../../assets/Vector 35.svg'
import st from './TeachingJourney.module.scss'
type Props = {}

const journeyObj = [
	{
		img: image1,
		title: 'ASK',
		id: '01',
		description:
			'Start by asking yourself what you need to enhance your teaching experience. Identify the gaps in your current teaching methods and areas where you can leverage technology to improve efficiency and engagement.',
	},
]
export default function TeachingJourney({}: Props) {
	return (
		<div className={st.root}>
			<p className={st.title}>
				Your Teaching <br />
				Journey
			</p>
			<img src={vector35} alt='' className={st.image} />
			<div className={st.container}>
				{journeyObj.map((journey, index) => (
					<div key={index} className={st.card}>
						<img src={journey.img} alt='' />
					</div>
				))}
			</div>
		</div>
	)
}
