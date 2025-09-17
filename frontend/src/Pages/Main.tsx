import BenefitsSection from '../Commponets/BenefitsSection/BenefitsSection'
import Header from '../Commponets/Heder/Header'
import Hero from '../Commponets/Hero/Hero'
import Latest from '../Commponets/Latest/Latest'
import LessonSection from '../Commponets/LessonSection/LessonSection'
import TeachingJourney from '../Commponets/TeachingJourney/TeachingJourney'
import TeachingTools from '../Commponets/TeachingTools/TeachingTools'

type Props = {}

export default function Main({}: Props) {
	return (
		<div>
			<Header />
			<Hero />
			<LessonSection />
			<BenefitsSection />
			<TeachingTools />
			<Latest />
			<TeachingJourney />
		</div>
	)
}
