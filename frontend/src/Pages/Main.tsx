import { useState } from 'react'
import BenefitsSection from '../Commponets/BenefitsSection/BenefitsSection'
import ClassReminder from '../Commponets/ClassReminder/ClassReminder'
import EnhanceStudents from '../Commponets/EnhanceStudents/EnhanceStudents'
import Footer from '../Commponets/Footer/Footer'
import Header from '../Commponets/Heder/Header'
import Hero from '../Commponets/Hero/Hero'
import Latest from '../Commponets/Latest/Latest'
import LessonSection from '../Commponets/LessonSection/LessonSection'
import MainVideos from '../Commponets/MainVideos/MainVideos'
import SignUpModal from '../Commponets/Modals//SignUpModal/SignUpModal'
import SignInModal from '../Commponets/Modals/SignInModal/SignInModal'
import ProductsCard from '../Commponets/ProductsCard/ProductsCard'
import TeachingJourney from '../Commponets/TeachingJourney/TeachingJourney'
import TeachingTools from '../Commponets/TeachingTools/TeachingTools'
import TestDrivePricing from '../Commponets/TestDrivePricing/TestDrivePricing'

type Props = {}

export default function Main({}: Props) {
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
	const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
	const handleOpenSignUp = () => {
		setIsSignUpModalOpen(true)
	}

	const handleCloseSignUp = () => {
		setIsSignUpModalOpen(false)
	}

	const handleCloseSignIn = () => {
		setIsSignInModalOpen(false)
	}

	const handleSwitchToSignIn = () => {
		setIsSignUpModalOpen(false)
		setIsSignInModalOpen(true)
	}

	const handleSwitchToSignUp = () => {
		setIsSignInModalOpen(false)
		setIsSignUpModalOpen(true)
	}

	return (
		<div>
			<Header />
			<Hero onSwitchToSignUp={handleOpenSignUp} />
			<LessonSection />
			<BenefitsSection />
			<TeachingTools />
			<Latest />
			<TeachingJourney />
			<EnhanceStudents />
			<ClassReminder />
			<MainVideos />
			<ProductsCard />
			<TestDrivePricing />
			<Footer />
			<SignUpModal
				isOpen={isSignUpModalOpen}
				onClose={handleCloseSignUp}
				onSwitchToSignIn={handleSwitchToSignIn}
			/>

			<SignInModal
				isOpen={isSignInModalOpen}
				onClose={handleCloseSignIn}
				onSwitchToSignUp={handleSwitchToSignUp}
			/>
		</div>
	)
}
