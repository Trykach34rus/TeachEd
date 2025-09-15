import ChekMarkOrange from '../../assets/ChekMark-Orange.svg'
import ChekMark from '../../assets/ChekMark.svg'
import TechEdLogo from '../../assets/TeachEd-Logo-Black.svg'
import st from './BenefitsSection.module.scss'

type Props = {}

type BenefitItem = {
	title: string
	description: string
}

const benefitsData: BenefitItem[] = [
	{
		title: 'Time-consuming Lesson Planning',
		description:
			'Crafting lesson plans can take several hours, consuming valuable time that could be spent on other important tasks.',
	},
	{
		title: 'Single-use Teaching Resources',
		description:
			'Materials created for one lesson are rarely reused, necessitating constant creation of new resources.',
	},
	{
		title: 'Manual Grading',
		description:
			'Teachers spend a considerable amount of time manually grading and assessing student work.',
	},
	{
		title: 'Limited Ideas for Future Classes',
		description:
			'Constantly coming up with new ideas for lessons can be challenging and exhausting.',
	},
	{
		title: 'Lack of Individualized Approach',
		description:
			'It s difficult to create materials that cater to the individual needs of each student.',
	},
	{
		title: 'Laborious Sharing of Experiences',
		description:
			'Sharing materials and ideas with colleagues can be cumbersome and inefficient',
	},
	{
		title: 'Challenges in Integrating Technology',
		description:
			'Implementing new technologies in the teaching process can be complex and time-consuming.',
	},
	{
		title: 'Low Student Engagement',
		description:
			'Traditional teaching methods dont always capture the attention and interest of students.',
	},
	{
		title: 'Limited Assessment Options',
		description:
			'Teachers are often restricted in the methods and tools available for student assessment.',
	},
	{
		title: 'Inefficient Feedback Processing',
		description:
			'Collecting and processing feedback from students takes a lot of time',
	},
]
const beneSecondData: BenefitItem[] = [
	{
		title: 'Quick and Engaging Lesson Creation',
		description:
			'Develop interactive and engaging lessons within minutes, significantly reducing preparation time.',
	},
	{
		title: 'Reusable and Customizable Content',
		description:
			'Easily adapt and reuse materials, providing greater flexibility and longevity to your resources.',
	},
	{
		title: 'Automated Assessment',
		description:
			'The platform automates the grading process, freeing up valuable time for teachers to interact with students.',
	},
	{
		title: 'Automated Assessment',
		description:
			'Easily adapt and reuse materials, providing greater flexibility and longevity to your resources.',
	},
	{
		title: 'Access to Thousands of Ready-made Resources',
		description:
			'Access thousands of pre-designed materials, ensuring you never run out of ideas for your next class',
	},
	{
		title: 'Personalized Learning Approach',
		description:
			'Create materials that cater to the individual needs and levels of each student, enhancing the learning experience',
	},
	{
		title: 'Challenges in Integrating Technology',
		description:
			'Implementing new technologies in the teaching process can be complex and time-consuming.',
	},
	{
		title: 'Easy Technology Integration',
		description:
			'Seamlessly incorporate the latest technologies into your teaching process, enhancing quality and modernity.',
	},
	{
		title: 'High Student Engagement',
		description:
			'Interactive and multimedia materials keep students engaged and interested in learning.',
	},
	{
		title: 'Expanded Assessment Options',
		description:
			'Utilize a variety of tools and methods for a more accurate and comprehensive assessment of student knowledge.',
	},
	{
		title: 'Efficient Experience Sharing',
		description:
			'Easily share materials and ideas with colleagues, improving collaborative work and knowledge exchange.',
	},
	{
		title: 'Quick Feedback Processing',
		description:
			'Collect and process feedback from students in real-time, allowing you to quickly respond to their needs.',
	},
	{
		title: 'Flexibility and Mobility',
		description:
			'Use the platform on any device and from any location, ensuring that materials are accessible anytime, anywhere.',
	},
]

export default function BenefitsSection({}: Props) {
	return (
		<section className={st.root}>
			<div className={st.container}>
				<div className={st.traditionalApproachContainer}>
					<p className={st.traditionalApproachTitle}>Traditional Approach</p>
					<div className={st.benefitsBlock}>
						{benefitsData.map((benefit, index) => (
							<div key={index} className={st.textContainer}>
								<img src={ChekMark} alt='Check mark' />
								<div className={st.text}>
									<p className={st.textTitle}>{benefit.title}</p>
									<p className={st.textDescription}>{benefit.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className={st.teachEdContainer}>
					<div className={st.traditionalApproachTitle}>
						<img src={TechEdLogo} />
					</div>
					<div className={st.benefitsBlock}>
						{beneSecondData.map((benefit, index) => (
							<div key={index} className={st.textContainer}>
								<img src={ChekMarkOrange} alt='Chek mark' />
								<div className={st.text}>
									<p className={st.textTitle}>{benefit.title}</p>
									<p className={st.textDescription}>{benefit.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
