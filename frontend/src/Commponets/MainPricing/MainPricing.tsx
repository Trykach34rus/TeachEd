import ProductsCard from '../ProductsCard/ProductsCard'
import st from './MainPricing.module.scss'
type Props = {}

export default function MainPricing({}: Props) {
	return (
		<div className={st.root}>
			<p className={st.title}>PRICING</p>
			<ProductsCard />
		</div>
	)
}
