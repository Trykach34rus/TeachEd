import BenefitsSection from '../Commponets/BenefitsSection/BenefitsSection'
import Hero from '../Commponets/Hero/Hero'
import LessonSection from '../Commponets/LessonSection/LessonSection'
import TeachingTools from '../Commponets/TeachingTools/TeachingTools'

type Props = {}

export default function Main({}: Props) {
	return (
		<div>
			<Hero />
			<LessonSection />
			<BenefitsSection />
			<TeachingTools />
		</div>
	)
}
