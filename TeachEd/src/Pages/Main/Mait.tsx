import BenefitsSection from '../../Commponets/BenefitsSection/BenefitsSection'
import Hero from '../../Commponets/Hero/Hero'
import LessonSection from '../../Commponets/LessonSection/LessonSection'

type Props = {}

export default function Mait({}: Props) {
	return (
		<div>
			<Hero />
			<LessonSection />
			<BenefitsSection />
		</div>
	)
}
