import BenefitsSection from '../Commponets/BenefitsSection/BenefitsSection'
import ClassReminder from '../Commponets/ClassReminder/ClassReminder'
import EnhanceStudents from '../Commponets/EnhanceStudents/EnhanceStudents'
import Footer from '../Commponets/Footer/Footer'
import Header from '../Commponets/Heder/Header'
import Hero from '../Commponets/Hero/Hero'
import Latest from '../Commponets/Latest/Latest'
import LessonSection from '../Commponets/LessonSection/LessonSection'
import MainPricing from '../Commponets/MainPricing/MainPricing'
import MainVideos from '../Commponets/MainVideos/MainVideos'
import TeachingJourney from '../Commponets/TeachingJourney/TeachingJourney'
import TeachingTools from '../Commponets/TeachingTools/TeachingTools'
import TestDrivePricing from '../Commponets/TestDrivePricing/TestDrivePricing'

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
			<EnhanceStudents />
			<ClassReminder />
			<MainVideos />
			<MainPricing />
			<TestDrivePricing />
			<Footer />
		</div>
	)
}
