import DasboardAside from '../../Commponets/DashboardComponets/DasboardAside/DasboardAside'
import DasboardMiniProfil from '../../Commponets/DashboardComponets/DasboardMiniProfil/DasboardMiniProfil'
import plas from '../../assets/Plas.svg'
import st from './NewBoard.module.scss'

type Props = {}
const templatesObj = [
	{ image: plas, title: 'New Board' },
	{ image: plas, title: '+Images' },
	{ image: plas, title: '+Gif' },
	{ image: plas, title: '+Video' },
	{ image: plas, title: '+ Complete the Sentences' },
	{ image: plas, title: '+ Quiz' },
	{ image: plas, title: '+ Creating Materials' },
]

export default function NewBoard({}: Props) {
	return (
		<div className={st.root}>
			<DasboardAside />
			<div className={st.container}>
				<DasboardMiniProfil />
				<div className={st.templateConatainer}>
					<h4 className={st.templateTitle}>Recommended templates</h4>
					<div className={st.templatesWrapper}>
						{templatesObj.map((template, index) => (
							<div key={index} className={st.template}>
								<button className={st.addButton}>
									<img src={template.image} alt='' />
								</button>
								<p className={st.title}>{template.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
