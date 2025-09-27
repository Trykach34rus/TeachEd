import DasboardAside from '../../Commponets/DashboardComponets/DasboardAside/DasboardAside'
import DasboardMiniProfil from '../../Commponets/DashboardComponets/DasboardMiniProfil/DasboardMiniProfil'
import DasnboadrdJurnal from '../../Commponets/DashboardComponets/DashboardJurnal/DasnboadrdJurnal'
import st from './Dashboard.module.scss'

type Props = {}

export default function Dashboard({}: Props) {
	return (
		<div className={st.root}>
			<DasboardAside />
			<div className={st.container}>
				<DasboardMiniProfil />
				<DasnboadrdJurnal />
			</div>
		</div>
	)
}
