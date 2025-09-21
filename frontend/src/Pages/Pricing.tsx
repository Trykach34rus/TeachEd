import EnhanceStudents from '../Commponets/EnhanceStudents/EnhanceStudents'
import FeaturesPricing from '../Commponets/FeaturesPricing/FeaturesPricing'
import Footer from '../Commponets/Footer/Footer'
import Header from '../Commponets/Heder/Header'
import HeroPricing from '../Commponets/HeroPricing/HeroPricing'
import ProductsCard from '../Commponets/ProductsCard/ProductsCard'
import TestDrivePricing from '../Commponets/TestDrivePricing/TestDrivePricing'

type Props = {}

export default function Pricing({}: Props) {
	return (
		<div>
			<Header />
			<HeroPricing />
			<ProductsCard />
			<FeaturesPricing />
			<EnhanceStudents />
			<TestDrivePricing />
			<Footer />
		</div>
	)
}
