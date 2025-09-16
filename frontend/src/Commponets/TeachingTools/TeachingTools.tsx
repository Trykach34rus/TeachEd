import TechingToolsImage from '../../assets/TechingTools-image.png'
import TechingToolsSvg1 from '../../assets/TechingTools-svg-1.svg'
import TechingToolsSvg2 from '../../assets/TechingTools-svg-2.svg'
import TechingToolsSvg3 from '../../assets/TechingTools-svg-3.svg'
import TechingToolsSvg4 from '../../assets/TechingTools-svg-4.svg'
import TechingToolsSvg5 from '../../assets/TechingTools-svg-5.svg'
import st from './TeachingTools.module.scss'

const toolsData = [
	{
		id: 1,
		title: 'Real-life Class Simulation',
		description:
			'Bring the classroom experience to life with virtual simulations that replicate real-life teaching environments',
		icon: TechingToolsSvg1,
	},
	{
		id: 2,
		title: 'Whiteboard Creative Space',
		description:
			'Utilize an interactive whiteboard that allows you and your students to draw, write, and brainstorm ideas in real-time',
		icon: TechingToolsSvg2,
	},
	{
		id: 3,
		title: 'Automated Homework Checking',
		description:
			'Automatically grade and provide feedback on homework assignments with AI-powered tools.',
		icon: TechingToolsSvg3,
	},
	{
		id: 4,
		title: 'Adaptive Learning Paths',
		description:
			"Personalized learning paths that adjust to each student's pace and understanding.",
		icon: TechingToolsSvg4,
	},
	{
		id: 5,
		title: 'Student Progress Dashboard',
		description:
			'Visualize and track student performance and progress over time.',
		icon: TechingToolsSvg5,
	},
]

export default function TeachingTools() {
	return (
		<section className={st.root}>
			<h2 className={st.title}>
				THE TOOLS THAT WILL <span>BOOST YOUR TEACHING</span>
			</h2>

			<div className={st.content}>
				<div className={st.imageBlock}>
					<img src={TechingToolsImage} alt='Teaching Tools' />
				</div>

				<div className={st.tools}>
					{toolsData.map(tool => (
						<div key={tool.id} className={st.toolCard}>
							<img src={tool.icon} alt={tool.title} className={st.icon} />
							<div>
								<h3>{tool.title}</h3>
								<p>{tool.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
