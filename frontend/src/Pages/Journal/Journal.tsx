import DasboardAside from '../../Commponets/DashboardComponets/DasboardAside/DasboardAside'
import DasboardMiniProfil from '../../Commponets/DashboardComponets/DasboardMiniProfil/DasboardMiniProfil'
import DasnboadrdJurnal from '../../Commponets/DashboardComponets/DashboardJurnal/DasnboadrdJurnal'
import st from './Journal.module.scss'

type Props = {}

export default function Journal({}: Props) {
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
