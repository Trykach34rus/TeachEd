import Footer from '../Commponets/Footer/Footer'
import Header from '../Commponets/Heder/Header'
import HeroAbout from '../Commponets/HeroAbout/HeroAbout'
type Props = {}

export default function AboutUs({}: Props) {
	return (
		<div>
			<Header />
			<HeroAbout />
			<Footer />
		</div>
	)
}
