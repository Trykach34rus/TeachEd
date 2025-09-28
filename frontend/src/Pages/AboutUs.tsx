import Footer from "../Commponets/Footer/Footer";
import Header from "../Commponets/Heder/Header";
import HeroAbout from "../Commponets/HeroAbout/HeroAbout";
import StepsAbout from "../Commponets/StepsAbout/StepsAbout";
import ContributionAbout from "../Commponets/ContributionAbout/ContributionAbout";
import FutureAbout from "../Commponets/FutureAbout/FutureAbout";
type Props = {};

export default function AboutUs({}: Props) {
  return (
    <div>
      <Header />
      <HeroAbout />
      <StepsAbout />
      <ContributionAbout />
      <FutureAbout />
      <Footer />
    </div>
  );
}
